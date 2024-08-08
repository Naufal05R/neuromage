import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <div className="root-container">
        <SignedIn>
          <div className="wrapper">{children}</div>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </div>
    </main>
  );
};

export default MainLayout;
