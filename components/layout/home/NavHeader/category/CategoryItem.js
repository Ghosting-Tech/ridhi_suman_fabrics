import Link from "next/link";

const CategoryItem = ({ href, label }) => {
  return (
    <Link href={href} className="hover:text-orange-500">
      {label}
    </Link>
  );
};

export default CategoryItem;
