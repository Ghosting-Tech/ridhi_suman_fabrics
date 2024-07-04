import { NextResponse } from 'next/server';
import connectDB from '@/utils/connect';
import Product from '@/model/addProduct/addProduct';

export const config = {
    api: {
        bodyParser: false, // Disable body parsing to handle file uploads
    },
};

export async function GET(req) {
    await connectDB();

    try {
        const products = await Product.find({});
        return NextResponse.json({ products });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
    }
}

export async function POST(req) {
    // Connect to the database
    await connectDB();
    try {
        // Extract data
        const data = await req.json();
        
        console.log({data})

        if (!data.productName || !data.price || !data.discount || !data.category || !data.image) {
          return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

      const product = new Product(data);

        // Save the product to the database
        await product.save();

        // Return a success response
        return NextResponse.json({ message: 'Product created successfully!' }, { status: 201 });
    } catch (error) {
        console.error('Error creating product:', error);
        // Return an error response
        return NextResponse.json({ message: 'Error creating product', error: error.message }, { status: 500 });
    }
}
