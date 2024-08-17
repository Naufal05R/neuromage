import React, { Suspense } from "react";
import { Collection } from "./Collection";
import { Search } from "./Search";
import { getAllImages } from "@/lib/actions/image.actions";

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
              <li key={index} className="collection-card">
                <div className="h-52 w-full rounded-[10px] bg-slate-400" />
                <div className="flex-between">
                  <div className="h-7 rounded-full bg-slate-400 odd:w-2/4 even:w-3/4"></div>
                  <div className="flex-center h-6 w-6 rounded-full bg-slate-400" />
                </div>
              </li>
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
