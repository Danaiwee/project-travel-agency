"use client";

import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "../ui/sidebar";

import NavLinks from "./NavLinks";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const LeftSidebar = () => {
  const username = "Danai Weerayutwattana";
  const email = "danai.weerayut@gmail.com";

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href={ROUTES.HOME} className="flex items-center gap-2 p-4">
          <Image
            src="/icons/logo.svg"
            alt="Logo"
            width={30}
            height={30}
            className="rounded-full object-contain"
          />

          <h1 className="text-2xl font-bold">Tourvisto</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <section className="mt-5 p-4">
          <NavLinks />
        </section>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-between p-4 gap-2">
          <div className="flex items-center gap-2">
            <Image
              src="/images/michael.webp"
              alt="Profile Image"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-gray-700">
                {username.slice(0, 15) + "..."}
              </p>
              <p className="text-sm font-medium text-gray-500 line-clamp-1">
                {email.slice(0, 15) + "..."}
              </p>
            </div>
          </div>

          <Image
            src="/icons/logout.svg"
            width={25}
            height={25}
            alt="Log out"
            className="cursor-pointer"
          />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default LeftSidebar;
