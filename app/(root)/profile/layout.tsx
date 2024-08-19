import Header from "@/components/shared/Header";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header title="Profile" />
      {children}
    </>
  );
}
