import React from "react";
import { Collection } from "./Collection";
import { getAllImages } from "@/lib/actions/image.actions";
import { Search } from "./Search";

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
      <div className="collection-heading">
        <h2 className="h2-bold text-dark-600">Recent Edits</h2>
        {hasSearch && <Search />}
      </div>

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
