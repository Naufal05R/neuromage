import React from "react";
import { Collection } from "./Collection";

const Gallery = async ({ page, searchQuery }: { page: number, searchQuery: string }) => {
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
