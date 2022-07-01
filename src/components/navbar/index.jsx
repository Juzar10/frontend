import React from "react";
import { ReactComponent as IconCart } from "../../assets/cartIcon.svg";
import { ReactComponent as Temp } from "../../assets/temp.svg";
import { ReactComponent as IconDownArrow } from "../../assets/downArrow.svg";
import SearchBar from "./subcomponent/searchbar";

export default function Navbar() {
  return (
    <nav className="flex w-screen h-20 ">
      {/* logo div */}
      <div className="w-3/12 h-full "></div>
      {/* searchbar div */}
      <SearchBar />
      {/* profile and cart div */}
      <div className="flex items-center w-3/12 h-full ">
        {" "}
        {/*Cart Svg */}
        <IconCart className="w-8 h-8 ml-8 stroke-2 stroke-purple" />
        {/*Profile Svg */}
        <div className="flex items-center ml-8">
          <Temp />
          <div className="items-start ml-3">
            <div className="flex items-center">
              {/*Profile Name */}
              <h1 className="font-bold text-menu text-purple">Dhruv</h1>
              {/*Dropdown for settings and logout. Just svg */}
              <IconDownArrow className="w-6 h-8 ml-2 stroke-2 stroke-purple" />
            </div>
            {/*user email address */}
            <p className="text-tiny text-lightpurple">
              dhruvkaneriya@rocketmail.com
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
