import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Button, CardFooter } from "@material-tailwind/react";

const ProductFooter = () => {
  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();

    console.log("Button clicked");
  };

  return (
    <CardFooter className="pt-0 mt-auto">
      <Button
        fullWidth={true}
        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 flex items-center justify-center"
        onClick={handleAddToCart}
      >
        <ShoppingCartIcon className="w-4 h-4 mr-2" />
        Add to Cart
      </Button>
    </CardFooter>
  );
};

export default ProductFooter;
