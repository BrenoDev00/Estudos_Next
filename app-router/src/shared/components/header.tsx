"use client";

import { routesList } from "../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header: React.FC = () => {
  const pathName = usePathname();

  return (
    <header className="bg-black text-white w-full py-2 px-4">
      <nav>
        <ul className="flex items-center gap-6">
          {routesList.map((route) => (
            <li key={route.name}>
              <Link
                href={route.href}
                className={`cursor-pointer ${
                  pathName === route.href && "text-purple-600"
                }`}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
