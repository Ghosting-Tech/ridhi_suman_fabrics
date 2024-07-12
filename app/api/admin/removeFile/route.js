import { NextResponse } from "next/server";

import removeFile from "@/config/removeFile";
import { checkAuthorization } from "@/config/checkAuthorization";

export const DELETE = async (request) => {
  const isAdmin = await checkAuthorization(request);

  if (isAdmin === "Unauthorized") {
    return NextResponse.json("Unauthorized Request", { status: 401 });
  }

  if (request.method !== "DELETE") {
    return NextResponse.json({ error: "Method Not Allowed" });
  }

  const filePath = request.url.split("=")[1].replaceAll(/%2F/g, "/");

  const updatedFilePath = filePath.substr(1, filePath.length);

  if (!filePath || typeof filePath !== "string") {
    return NextResponse.json({ error: "Something went wrong!" });
  }

  try {
    await removeFile(updatedFilePath);

    return NextResponse.json("File deleted successfully", {
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting file:", error);

    return NextResponse.json("Something went wrong!", {
      status: 500,
    });
  }
};
