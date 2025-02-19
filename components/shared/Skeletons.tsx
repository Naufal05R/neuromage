import { MAX_IMAGES_PER_PAGE } from "@/constants";
import { skeleton } from "@/constants/styles";
import { cn } from "@/lib/utils";

export const GalleryImageSkeleton = () => {
  return (
    <ul className="collection-list">
      {Array.from({ length: MAX_IMAGES_PER_PAGE }).map((_, index) => (
        <li key={index} className="collection-card">
          <div
            className={cn(
              "h-52 w-full rounded-[10px] bg-slate-400/20",
              skeleton,
            )}
          />
          <div className="flex-between">
            <div
              className={cn(
                "h-7 rounded-full bg-slate-400/20 odd:w-2/4 even:w-3/4",
                skeleton,
              )}
            />
            <div
              className={cn(
                "flex-center h-6 w-6 rounded-full bg-slate-400/20",
                skeleton,
              )}
            />
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
        <li key={index} className="profile-card_information">
          <div
            className={cn(
              "h-[22px] w-full rounded-full bg-slate-400/20",
              skeleton,
            )}
          />
          <div className="mt-4 flex items-center gap-4">
            <div
              className={cn(
                "size-9 rounded-full bg-slate-400/20 md:size-12",
                skeleton,
              )}
            />
            <div
              className={cn(
                "h-[39px] w-2/3 rounded-full bg-slate-400/20",
                skeleton,
              )}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default function AddTransformationTypeSkeleton({
  type,
}: {
  type: TransformationTypeKey;
}) {
  return (
    <div className="mt-10">
      <div className="space-y-8">
        <div className="space-y-2">
          <label
            className={cn(
              "block w-fit rounded-full bg-slate-400/20 text-transparent",
              skeleton,
            )}
          >
            Static Label
          </label>
          <div
            className={cn(
              "mt-2 h-[54px] rounded-2xl bg-slate-400/20",
              skeleton,
            )}
          />
        </div>

        {(type === "fill" || type === "remove") && (
          <div className="space-y-2">
            <label
              className={cn(
                "block w-fit rounded-full bg-slate-400/20 text-transparent",
                skeleton,
              )}
            >
              Static Label
            </label>
            <div
              className={cn(
                "mt-2 h-[54px] rounded-2xl bg-slate-400/20",
                skeleton,
              )}
            />
          </div>
        )}

        {type === "recolor" && (
          <div className="prompt-field">
            <div className="space-y-2 w-full">
              <label
                className={cn(
                  "block w-fit rounded-full bg-slate-400/20 text-transparent",
                  skeleton,
                )}
              >
                Static Label
              </label>
              <div
                className={cn(
                  "mt-2 h-[54px] rounded-2xl bg-slate-400/20",
                  skeleton,
                )}
              />
            </div>
            <div className="space-y-2 w-full">
              <label
                className={cn(
                  "block w-fit rounded-full bg-slate-400/20 text-transparent",
                  skeleton,
                )}
              >
                Static Label
              </label>
              <div
                className={cn(
                  "mt-2 h-[54px] rounded-2xl bg-slate-400/20",
                  skeleton,
                )}
              />
            </div>
          </div>
        )}

        <div className="media-uploader-field">
          <div className="flex size-full flex-col space-y-2">
            <div className="flex flex-col gap-4">
              <div
                className={cn(
                  "h-[42px] w-1/2 rounded-full bg-slate-400/20",
                  skeleton,
                )}
              />
              <div
                className={cn(
                  "flex-center flex h-72 cursor-pointer flex-col gap-5 rounded-2xl bg-slate-400/20",
                  skeleton,
                )}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div
              className={cn(
                "h-[42px] w-1/2 rounded-full bg-slate-400/20",
                skeleton,
              )}
            />
            <div
              className={cn(
                "flex-center flex h-72 cursor-pointer flex-col gap-5 rounded-2xl bg-slate-400/20",
                skeleton,
              )}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div
            className={cn(
              "h-[54px] w-full rounded-full bg-slate-400/20",
              skeleton,
            )}
          />
          <div
            className={cn(
              "h-[54px] w-full rounded-full bg-slate-400/20",
              skeleton,
            )}
          />
        </div>
      </div>
    </div>
  );
}
