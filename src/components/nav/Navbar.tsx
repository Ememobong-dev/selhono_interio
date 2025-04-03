import Image from "next/image";
import React from "react";
import brand_logo from "/images/brand_logo.png";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="p-7 flex justify-between items-center">
        <span>
          <Image src={brand_logo} alt="brand_logo" />
        </span>
        <div className="flex gap-4 items-center">
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
          Home
          </span>
        </div>
      </div>
    </div>
  );
};
