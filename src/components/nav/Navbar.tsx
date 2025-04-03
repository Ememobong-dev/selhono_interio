import Image from "next/image";
import React from "react";
import brand_logo from "@/public/images/brand_logo.png";
import searchIcon from "@/public/icons/searchIcon.svg";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex justify-center items-center w-full fixed top-0">
      <div className="py-7 flex justify-between items-center w-[70%] ">
        <span>
          <Image src={brand_logo} alt="brand_logo" />
        </span>
        <div className="flex gap-8 items-center">
          <Link href={"/"}>
            <p>Home</p>
          </Link>
          <Link href={"/"}>
            <p>Pages</p>
          </Link>
          <Link href={"/"}>
            <p>Services</p>
          </Link>
          <Link href={"/"}>
            <p>Project</p>
          </Link>
          <Link href={"/"}>
            <p>Blog</p>
          </Link>
          <Link href={"/"}>
            <p>Contact</p>
          </Link>
          <span>
          <Image src={searchIcon} className="w-5 h-5" alt="search_icon" />
          </span>
        </div>
      </div>
    </div>
  );
};
