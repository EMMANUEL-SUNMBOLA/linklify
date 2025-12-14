import React from "react";
// import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react";
import Link from "./Link.jsx";

const links = [
  {
    icon: "X",
    platform: "Dune: Phrophesy | Official Trailer - Power | Max",
  },
  {
    icon: "F",
    platform: "Hurricane Relief | Warner Bros. Discovery",
  },
  {
    icon: "T",
    platform: "House of the Dragon Red Keep Set Tour | House of the Dragon | Max",
  },
  {
    icon: "T",
    platform: "The Official Game of Thrones Podcast: House of the Dragon",
  },
  {
    icon: "T",
    platform: "Tom Glynn-Carney & Ewan Mitchell Play Would You Rather | House of the Dragon | Max",
  },
];

export default function LinkTree({ imgUrl, Username }) {
  return (
    <div className="mt-[20vh] p-5  flex items-center justify-center">
      <div className="w-[80%] flex flex-col gap-3">
        {links.map((link) => (
          <div className="w-full test shadow shadow-sm shadow-gray-300">
            <Link icon={link.icon} platform={link.platform} />
          </div>
        ))}
      </div>
    </div>
  );
}
