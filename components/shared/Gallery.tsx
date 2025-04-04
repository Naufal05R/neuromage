import React, { Suspense } from "react";
import { Collection } from "./Collection";
import { Search } from "./Search";
import { getAllImages } from "@/lib/actions/image.actions";
import { GalleryImageSkeleton } from "./Skeletons";

const Gallery = ({
  page,
  heading,
  searchQuery = "",
  hasSearch = false,
}: {
  page: number;
  heading: string;
  searchQuery?: string;
  hasSearch?: boolean;
}) => {
  return (
    <section className="sm:mt-12">
      <div className="collection-heading">
        <h2 className="h2-bold text-dark-600">{heading}</h2>
        {hasSearch && <Search />}
      </div>

      <Suspense key={searchQuery + page} fallback={<GalleryImageSkeleton />}>
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
