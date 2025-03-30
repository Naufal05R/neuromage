import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

import { getUserImages } from "@/lib/actions/image.actions";
import { getUserById } from "@/lib/actions/user.actions";
import Gallery from "@/components/shared/Gallery";
import Header from "@/components/shared/Header";
import { Suspense, use } from "react";
import { ProfileInformationSkeleton } from "@/components/shared/Skeletons";

const ProfilePage = async ({ ...props }: SearchParamProps) => {
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page) || 1;
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  return (
    <>
      <Header title="Profile" />

      <Suspense fallback={<ProfileInformationSkeleton />}>
        <ProfileInformation userId={userId} page={page} />
      </Suspense>

      <Gallery page={page} heading="Your Collections" />
    </>
  );
};

const ProfileInformation = async ({
  userId,
  page,
}: {
  userId: string;
  page: number;
}) => {
  const user = await getUserById(userId);
  const images = await getUserImages({ page, userId: user._id });

  return (
    <section className="profile">
      <div className="profile-card_information">
        <p className="p-14-medium md:p-16-medium">CREDITS AVAILABLE</p>
        <div className="mt-4 flex items-center gap-4">
          <Image
            src="/assets/icons/coins.svg"
            alt="coins"
            width={50}
            height={50}
            className="size-9 md:size-12"
          />
          <h2 className="h2-bold text-dark-600">{user.creditBalance}</h2>
        </div>
      </div>

      <div className="profile-card_information">
        <p className="p-14-medium md:p-16-medium">IMAGE MANIPULATION DONE</p>
        <div className="mt-4 flex items-center gap-4">
          <Image
            src="/assets/icons/photo.svg"
            alt="coins"
            width={50}
            height={50}
            className="size-9 md:size-12"
          />
          <h2 className="h2-bold text-dark-600">{images?.data.length}</h2>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
