import React from "react";
import Search from "@/components/searchbar/search";
import HeaderLinks from "../headerLinks/headerLinks";
import SideBarMobile from "@/components/sidebar/sidebarMobile";
import cn from "classnames";

const header = () => {
  return (
    <>
      <header className="py-4 px-8 flex gap-x-[20px] items-center duration-300">
        <div className="">
          <SideBarMobile />
          <div
            className={cn("flex justify-end flex-grow", "flix:justify-center")}
          >
            <div className="cursor-pointer max-w-[442px] flix:w-full">
              <Search />
            </div>
          </div>
          <div>
            <HeaderLinks />
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
