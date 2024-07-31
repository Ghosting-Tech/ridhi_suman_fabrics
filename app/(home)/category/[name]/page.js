import CategoryPageHeader from "@/components/layout/home/categories/CategoryPageHeader";
import ProductList from "@/components/layout/products/ProductList";
import PaginationBtn from "@/components/ui/PaginationBtn";

async function getCategoryProduct(params, searchParams) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/product/category/${params.name}?page=${searchParams.page || 1}`,
      {
        cache: "no-store",
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data);
    }
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

const CategoryPage = async ({ params, searchParams }) => {
  const data = await getCategoryProduct(params, searchParams);

  return (
    <>
      <CategoryPageHeader category={params} cat={true} />

      <ProductList products={data.data} />

      <div className="mb-6">
        <PaginationBtn totalPages={data?.meta?.totalPages} />
      </div>
    </>
  );
};

export default CategoryPage;
