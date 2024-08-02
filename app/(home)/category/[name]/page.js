import CategoryPageHeader from "@/components/layout/home/categories/CategoryPageHeader";
import ProductList from "@/components/layout/products/ProductList";
import PaginationBtn from "@/components/ui/PaginationBtn";

async function getCategoryProduct(params, searchParams) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/product/category/${params.name}?page=${searchParams.page || 1}`,
    {
      cache: "no-store",
      method: "GET",
    }
  );

  if (!res.ok) {
    throw new Error(data);
  }

  return res.json();
}

const CategoryPage = async ({ params, searchParams }) => {
  const data = await getCategoryProduct(params, searchParams);

  return (
    <main>
      <CategoryPageHeader category={params} cat={true} />

      <ProductList products={data.data} />

      <div className="mb-6">
        <PaginationBtn totalPages={data?.meta?.totalPages} />
      </div>
    </main>
  );
};

export default CategoryPage;
