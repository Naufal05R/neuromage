import { MAX_IMAGES_PER_PAGE } from "@/constants";

export const GalleryImageSkeleton = () => {
  return (
    <ul className="collection-list">
      {Array.from({ length: MAX_IMAGES_PER_PAGE }).map((_, index) => (
        <li
          key={index}
          className="collection-card before:animate-shimmer relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:from-20% before:via-slate-400/20 before:to-80% before:to-transparent"
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
  return 
}
