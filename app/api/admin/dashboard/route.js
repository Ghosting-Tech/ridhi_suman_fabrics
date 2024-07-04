import dbConnect from "@/config/db";
import Category from "@/model/category";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const categories = await Category.find();


    
    return NextResponse.json({}, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
