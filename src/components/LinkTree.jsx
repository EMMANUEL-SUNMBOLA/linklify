import React from "react";
// import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react";
import Link from "./Link.jsx";

export default function LinkTree({ imgUrl, Username }) {
  return (
    <div className="mt-[20vh] p-5">
      <div className="w-full rounded-3xl test shadow shadow-sm shadow-gray-300">
        <Link icon={"<BadgeCheckIcon />"} platform={"twitter"} />
      </div>
    </div>
  );
}
