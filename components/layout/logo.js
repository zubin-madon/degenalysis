import React from "react";
import { Fragment } from "react";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <div className="mt-2">
        <span className="ml-4 text-3xl text-purple-600">DEGEN</span>{" "}
        <span className="ml-0 text-3xl text-white">ALYSIS</span>
      </div>
    </Link>
  );
}

export default Logo;
