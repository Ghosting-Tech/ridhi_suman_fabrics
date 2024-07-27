"use client";

import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PaginationBtn = React.memo(({ totalPages = 1 }) => {
  const { replace } = useRouter();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  );

  const [active, setActive] = useState(1);

  useEffect(() => {
    const currentPage = parseInt(params.get("page") || "1", 10);

    setActive(currentPage);
  }, [params]);

  const updatePage = useCallback(
    (newPage) => {
      params.set("page", newPage);
      replace(`${pathname}?${params.toString()}`);

      setActive(newPage);
    },
    [replace, params, pathname]
  );

  const getItemProps = useCallback(
    (index) => ({
      variant: active === index ? "filled" : "text",

      color: "gray",

      onClick: () => updatePage(index),
    }),
    [active, updatePage]
  );

  const next = useCallback(() => {
    const newPage = Math.min(active + 1, totalPages);

    updatePage(newPage);
  }, [active, totalPages, updatePage]);

  const prev = useCallback(() => {
    const newPage = Math.max(active - 1, 1);

    updatePage(newPage);
  }, [active, updatePage]);

  const renderPageButtons = useMemo(() => {
    const maxPagesToShow = 5;
    const pagesToRender = Math.min(totalPages, maxPagesToShow);

    return Array.from({ length: pagesToRender }, (_, i) => (
      <IconButton key={i + 1} {...getItemProps(i + 1)}>
        {i + 1}
      </IconButton>
    ));
  }, [totalPages, getItemProps]);

  return (
    <div className="flex items-center gap-4 justify-center">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>

      <div className="items-center gap-2 hidden md:flex">
        {renderPageButtons}
      </div>

      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === totalPages}
      >
        Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
});

PaginationBtn.displayName = "PaginationBtn";

export default PaginationBtn;