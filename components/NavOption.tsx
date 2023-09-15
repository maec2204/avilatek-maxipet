import React from "react";
import Link from "next/link";
import { NAV_ITEMS } from "../constant";

function NavOption() {
  return (
    <>
      {NAV_ITEMS.map((navItem) => (
        <Link key={navItem} href={`/${navItem}`} className="text-secondary-600">
          {navItem}
        </Link>
      ))}
    </>
  );
}

export default NavOption;
