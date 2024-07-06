import { v4 } from "uuid";
import pathModule, { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";

const uploadFile = async (file, pathLocation, fileName) => {
  const path = `/uploads/${pathLocation}/`;

  const buffer = Buffer.from(await file.arrayBuffer());

  const uploadDir = join(process.cwd(), "public", path);

  try {
    await stat(uploadDir);
  } catch (e) {
    if (e.code === "ENOENT") {
      await mkdir(uploadDir, { recursive: true });
    } else {
      console.error(
        "Error while trying to create directory when uploading a file\n",
        e
      );

      return NextResponse.json(
        { error: "Something went wrong." },
        { status: 500 }
      );
    }
  }

  try {
    const uniqueFileName = `${v4()}_${fileName}${pathModule.extname(
      file.name
    )}`;

    await writeFile(
      pathModule.join(process.cwd(), `public/${path}` + uniqueFileName),
      buffer
    );

    return `${path}${uniqueFileName}`;
  } catch (error) {
    console.log("Error occurred ", error);

    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};

export default uploadFile;
