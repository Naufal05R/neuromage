import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="auth">{children}</main>;
};

export default RootLayout;
