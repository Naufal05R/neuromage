"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const NavLink = ({ start, end }: { start: number; end?: number }) => {
  const pathname = usePathname();

  return navLinks.slice(start, end).map((link, index) => {
    const isActive = link.route === pathname;

    return (
      <li
        key={link.route}
        className={cn(
          "sidebar-nav_element group",
          isActive ? "bg-purple-gradient text-white" : "text-gray-700",
        )}
      >
        <Link className="sidebar-link" href={link.route}>
          <Image
            src={link.icon}
            alt="logo"
            width={24}
            height={24}
            className={cn({ "brightness-200": isActive })}
          />
          {link.label}
        </Link>
      </li>
    );
  });
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
            className=""
          />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              <NavLink start={0} end={6} />
            </ul>

            <ul className="sidebar-nav_elements">
              <NavLink start={6} />

              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSwitchSessionUrl="/" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
