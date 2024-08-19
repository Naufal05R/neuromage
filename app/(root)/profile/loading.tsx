import Image from "next/image";

export default function Loading() {
  return (
    <section className="profile">
      <div className="profile-balance">
        <p className="p-14-medium md:p-16-medium">CREDITS AVAILABLE</p>
        <div className="mt-4 flex items-center gap-4">
          <Image
            src="/assets/icons/coins.svg"
            alt="coins"
            width={50}
            height={50}
            className="size-9 md:size-12"
          />
          <div className="h-[39px] rounded-full w-16 bg-slate-400" />
        </div>
      </div>

      <div className="profile-image-manipulation">
        <p className="p-14-medium md:p-16-medium">IMAGE MANIPULATION DONE</p>
        <div className="mt-4 flex items-center gap-4">
          <Image
            src="/assets/icons/photo.svg"
            alt="coins"
            width={50}
            height={50}
            className="size-9 md:size-12"
          />
          <div className="h-[39px] rounded-full w-12 bg-slate-400" />
        </div>
      </div>
    </section>
  );
}
