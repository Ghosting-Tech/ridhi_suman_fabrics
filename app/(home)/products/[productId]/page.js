import ImageSlider from "@/components/layout/products/productDetails/ImageSlider";
import ProductInfo from "@/components/layout/products/productDetails/ProductInfo";

const fetchProductData = async (productId) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/product/${productId}`,
      {
        cache: "no-store", // Ensure fresh data fetching
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.log("Error fetching product data:", error);
    return null;
  }
};

export default async function ProductData({ params: { productId } }) {
  const productData = await fetchProductData(productId);

  // console.log(productData)

  return (
    <div className="flex gap-6 flex-col md:flex-row justify-center">
      <ImageSlider data={productData?.images} />
      <ProductInfo product={productData} />
    </div>
  );
}
