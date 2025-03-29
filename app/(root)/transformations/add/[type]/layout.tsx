import Header from "@/components/shared/Header";
import AddTransformationTypeSkeleton from "@/components/shared/Skeletons";
import { transformationTypes } from "@/constants";
import { Suspense, use } from "react";

interface Props extends React.PropsWithChildren, SearchParamProps {}

export default function AddTransformationTypeLayout({
  children,
  params,
}: Props) {
  const { type } = use(params);
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
