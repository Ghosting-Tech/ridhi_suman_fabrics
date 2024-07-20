import CategoriesList from "../categories/CategoriesList";

async function getCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/category`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const CategoriesYouMayLike = async () => {
  const data = await getCategories();

  return (
    <div className="relative p-4 sm:p-8 bg-gray-50">
      <h2 className="text-2xl lg:text-4xl font-bold text-center text-[#0052D4] font-aclonica leading-tight mb-4 sm:mb-8">
        Categories you may like
      </h2>

      <CategoriesList categoryData={data} />
    </div>
  );
};

export default CategoriesYouMayLike;
