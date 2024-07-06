import { NextResponse } from "next/server";

import { unlink } from "fs/promises";

import { resolve } from "path";

const removeFile = async (filePath) => {
  try {
    const file = resolve(process.cwd(), "public/", `${filePath}`);

    await unlink(file);

    return file;
  } catch (error) {
    console.error("Error deleting file:", error);

    return NextResponse.json("Failed to delete file");
  }
};

export default removeFile;
