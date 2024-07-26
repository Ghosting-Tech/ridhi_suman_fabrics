import React, { useState } from "react";
import { Button, IconButton, Input } from "@material-tailwind/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import NavCategory from "./category/NavCategory";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const NavList = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const handleKeyDown = (e) => {
    if (!searchQuery) return;
    if (e.key === "Enter") {
      router.push(`/search?query=${searchQuery}`);
      setSearchQuery("");
    }
  };
  const handleSearch = (e) => {
    if (!searchQuery) return;
    router.push(`/search?query=${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row my-4 lg:my-0 bg-transparent gap-4">
        <div className="relative flex w-full lg:w-96">
          <Input
            label="Search Product..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            containerProps={{
              className: "min-w-0",
            }}
            onKeyDown={handleKeyDown}
          />
          <IconButton
            size="sm"
            className="!absolute right-1 top-1 rounded"
            variant="text"
            onClick={handleSearch}
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
          </IconButton>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-fit">
          <div className="flex lg:hidden">
            <NavCategory />
          </div>
          <Button
            className="flex items-center gap-2 text-gray-800 px-4 w-full justify-center sm:min-w-fit"
            variant="text"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            Cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavList;
