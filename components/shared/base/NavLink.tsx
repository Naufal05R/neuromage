'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";

const NavLink = ({ start, end }: { start: number; end?: number }) => {
  const pathname = usePathname();

  return navLinks.slice(start, end).map((link) => {
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
