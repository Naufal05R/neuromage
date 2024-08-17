import React from "react";
import Link from "next/link";
import Image from "next/image";
import Gallery from "@/components/shared/Gallery";
import { navLinks } from "@/constants";

const Home = ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  return (
    <>
      <section className="home">
        <h1 className="home-heading">
          Unleash Your Creative Vision with Neuromage
        </h1>

        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link, index) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-full bg-white p-4">
                <Image src={link.icon} alt="image" width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <Gallery page={page} searchQuery={searchQuery} />
    </>
  );
};

export default Home;
