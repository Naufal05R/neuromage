import { MAX_IMAGES_PER_PAGE } from "@/constants";

export const GalleryImageSkeleton = () => {
  return (
    <ul className="collection-list">
      {Array.from({ length: MAX_IMAGES_PER_PAGE }).map((_, index) => (
        <li
          key={index}
          className="collection-card relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:from-20% before:via-slate-400/20 before:to-transparent before:to-80%"
        >
          <div className="h-52 w-full rounded-[10px] bg-slate-400/20" />
          <div className="flex-between">
            <div className="h-7 rounded-full bg-slate-400/20 odd:w-2/4 even:w-3/4"></div>
            <div className="flex-center h-6 w-6 rounded-full bg-slate-400/20" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export const ProfileInformationSkeleton = () => {
  return (
    <section className="profile">
      <div className="profile-balance">
        <p className="p-14-medium md:p-16-medium">CREDITS AVAILABLE</p>
        <div className="mt-4 flex items-center gap-4">
          <div className="size-9 rounded-full md:size-12" />
          <div className="h-[39px] w-16 rounded-full bg-slate-400" />
        </div>
      </div>

      <div className="profile-image-manipulation">
        <p className="p-14-medium md:p-16-medium">IMAGE MANIPULATION DONE</p>
        <div className="mt-4 flex items-center gap-4">
          <div className="size-9 rounded-full md:size-12" />
          <div className="h-[39px] w-12 rounded-full bg-slate-400" />
        </div>
      </div>
    </section>
  );
};
