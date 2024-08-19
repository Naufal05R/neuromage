import Header from "@/components/shared/Header";
import AddTransformationTypeSkeleton from "@/components/shared/Skeletons";
import { transformationTypes } from "@/constants";
import { Suspense } from "react";

export default function AddTransformationTypeLayout({
  children,
  params: { type },
}: {
  children: React.ReactNode;
  params: { type: TransformationTypeKey };
}) {
  const transformation = transformationTypes[type];

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <Suspense
        fallback={
          <AddTransformationTypeSkeleton
            type={transformation.type as TransformationTypeKey}
          />
        }
      >
        {children}
      </Suspense>
    </>
  );
}
