const ProductList = ({ children }) => {
  return (
    <div className="grid gap-4 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-20 px-4">
      {children}
    </div>
  );
};

export default ProductList;
