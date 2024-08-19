import Header from "@/components/shared/Header";
import { transformationTypes } from "@/constants";

export default function AddTransformationTypeLayout({
  children,
  params: { type },
}: {
  children: React.ReactNode;
} & SearchParamProps) {
  const transformation = transformationTypes[type];

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      {children}
    </>
  );
}
