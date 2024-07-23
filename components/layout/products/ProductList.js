import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="grid gap-x-4 gap-y-10 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-20 px-4">
      {products?.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
