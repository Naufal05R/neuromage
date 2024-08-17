import React from "react";
import { Collection } from "./Collection";
import { getAllImages } from "@/lib/actions/image.actions";

const Gallery = async ({
  page,
  searchQuery,
  hasSearch = false,
}: {
  page: number;
  searchQuery: string;
  hasSearch?: boolean;
}) => {
  const images = await getAllImages({ page, searchQuery });

  return (
    <section className="sm:mt-12">
      <Collection
        hasSearch
        images={images?.data}
        totalPages={images?.totalPages}
        page={page}
      />
    </section>
  );
};

export default Gallery;
