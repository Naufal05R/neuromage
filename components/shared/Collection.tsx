"use client";

import Image from "next/image";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

import { transformationTypes } from "@/constants";
import { ImageInterface } from "@/lib/database/models/image.model";

import Pager from "./Pager";

export const Collection = ({
  images,
  totalPages = 1,
  page,
}: {
  images: ImageInterface[];
  totalPages?: number;
  page: number;
}) => {
  return (
    <>
      {images.length > 0 ? (
        <ul className="collection-list">
          {images.map((image) => (
            <Card image={image} key={image._id as string} />
          ))}
        </ul>
      ) : (
        <div className="collection-empty">
          <p className="p-20-semibold">Empty List</p>
        </div>
      )}

      <Pager totalPages={totalPages} page={page} />
    </>
  );
};

const Card = ({ image }: { image: ImageInterface }) => {
  return (
    <li>
      <Link href={`/transformations/${image._id}`} className="collection-card">
        <CldImage
          src={image.publicId}
          alt={image.title}
          width={image.width}
          height={image.height}
          {...image.config}
          loading="lazy"
          className="h-52 w-full rounded-[10px] object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
        />
        <div className="flex-between">
          <p className="p-20-semibold mr-3 line-clamp-1 text-dark-600">
            {image.title}
          </p>
          <Image
            src={`/assets/icons/${
              transformationTypes[
                image.transformationType as TransformationTypeKey
              ].icon
            }`}
            alt={image.title}
            width={24}
            height={24}
          />
        </div>
      </Link>
    </li>
  );
};
