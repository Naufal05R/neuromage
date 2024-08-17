"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { Button } from "../ui/button";

const Pager = ({
  page: page,
  totalPages,
}: {
  page: string | number;
  totalPages: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onPageChange = (action: string) => {
    const pageValue = action === "next" ? Number(page) + 1 : Number(page) - 1;

    const newUrl = formUrlQuery({
      searchParams: searchParams.toString(),
      key: "page",
      value: pageValue,
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <>
      {totalPages > 1 && (
        <Pagination className="mt-10">
          <PaginationContent className="flex w-full">
            <Button
              disabled={Number(page) <= 1}
              className="collection-btn"
              onClick={() => onPageChange("prev")}
            >
              <PaginationPrevious className="hover:bg-transparent hover:text-white" />
            </Button>

            <p className="flex-center p-16-medium w-fit flex-1">
              {page} / {totalPages}
            </p>

            <Button
              className="button w-32 bg-cover text-white bg-gradient-sky-blue"
              onClick={() => onPageChange("next")}
              disabled={Number(page) >= totalPages}
            >
              <PaginationNext className="hover:bg-transparent hover:text-white" />
            </Button>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

export default Pager;
