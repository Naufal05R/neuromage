import React, { Suspense } from "react";
import { Collection } from "./Collection";
import { getAllImages } from "@/lib/actions/image.actions";
import { Search } from "./Search";

const Gallery = ({
  page,
  searchQuery,
  hasSearch = false,
}: {
  page: number;
  searchQuery: string;
  hasSearch?: boolean;
}) => {
  return (
    <section className="sm:mt-12">
      <div className="collection-heading">
        <h2 className="h2-bold text-dark-600">Recent Edits</h2>
        {hasSearch && <Search />}
      </div>

      <Suspense
        key={searchQuery + page}
        fallback={
          <ul className="collection-list">
            {Array.from({ length: 10 }).map((_, index) => (
              <li key={index} className="collection-card" />
            ))}
          </ul>
        }
      >
        <GalleryImage page={page} searchQuery={searchQuery} />
      </Suspense>
    </section>
  );
};

const GalleryImage = async ({
  page,
  searchQuery,
}: {
  page: number;
  searchQuery: string;
}) => {
  const images = await getAllImages({ page, searchQuery });
  return (
    <Collection
      images={images?.data}
      totalPages={images?.totalPages}
      page={page}
    />
  );
};

export default Gallery;
