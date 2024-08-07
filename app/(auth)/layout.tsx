import React from "react";

const AuthenticationLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="auth">{children}</main>;
};

export default AuthenticationLayout;
