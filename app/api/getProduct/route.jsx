import { NextResponse } from 'next/server';
import connectDB from '@/utils/connect';
import Product from '@/model/addProduct/addProduct';



export async function GET(request) {
    await connectDB
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    let products;

    if (category) {
        products = await Product.find({ category }).toArray();
    } else {
        products = await Product.find().toArray();
    }

    return NextResponse.json(products);
}