import { MAX_IMAGES_PER_PAGE } from "@/constants";
import { cn } from "@/lib/utils";

const styles = {
  shimmer:
    "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:from-20% before:via-slate-400/20 before:to-transparent before:to-80%",
};

export const GalleryImageSkeleton = () => {
  return (
    <ul className="collection-list">
      {Array.from({ length: MAX_IMAGES_PER_PAGE }).map((_, index) => (
        <li
          key={index}
          className={cn(
            "collection-card",
            "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:from-20% before:via-slate-400/20 before:to-transparent before:to-80%",
          )}
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
    <ul className="profile">
      {Array.from({ length: 2 }).map((_, index) => (
        <li
          key={index}
          className={cn(
            "profile-card_information",
            "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:from-20% before:via-slate-400/20 before:to-transparent before:to-80%",
          )}
        >
          <div className="h-[22px] w-full rounded-full bg-slate-400/20" />
          <div className="mt-4 flex items-center gap-4">
            <div className="size-9 rounded-full bg-slate-400/20 md:size-12" />
            <div className="h-[39px] w-2/3 rounded-full bg-slate-400/20" />
          </div>
        </li>
      ))}
    </ul>
  );
};
