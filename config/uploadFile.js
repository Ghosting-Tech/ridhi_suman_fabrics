import { NextResponse } from "next/server";

import { v4 } from "uuid";
import pathModule, { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";

const uploadFile = async (file, pathLocation) => {
  const path = `uploads/${pathLocation}/`;

  try {
    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadDir = join(process.cwd(), "public", path);

    await stat(uploadDir);
  } catch (e) {
    if (e.code === "ENOENT") {
      await mkdir(uploadDir, { recursive: true });
    } else {
      console.error(
        "Error while trying to create directory when uploading a file\n",
        e
      );

      return NextResponse.json("Something went wrong.", { status: 500 });
    }
  }

  try {
    const uniqueFileName = `${v4()}${pathModule.extname(file.name)}`;

    await writeFile(
      pathModule.join(process.cwd(), `public/${path}` + uniqueFileName),
      buffer
    );

    return `${path}${uniqueFileName}`;
  } catch (error) {
    console.log("Error occurred ", error);

    return NextResponse.json("Failed to upload image", { status: 500 });
  }
};

export default uploadFile;
