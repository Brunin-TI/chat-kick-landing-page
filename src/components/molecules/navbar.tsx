import React from "react";
import { ChevronDownIcon, EmailIcon } from "../../assets/icons/Icon";
import Button from "../atoms/button";
import DropdownMenu from "../atoms/dropdown-menu";

interface NavBarProps {}
const Navbar: React.FC<NavBarProps> = () => {
  return (
    <div
      className={` flex flex-col lg:flex-row items-center w-full mt-4 bg-white z-10 lg:z-0 py-10 lg:p-0`}
    >
      <DropdownMenu
        label="resources"
        items={[
          { label: "Leo", icon: <ChevronDownIcon /> },
          { label: "Bruno", icon: <ChevronDownIcon /> },
        ]}
      />
      <div className="py:1 lg:px-6" />
      <DropdownMenu
        label="products"
        items={[
          { label: "Torres", icon: <ChevronDownIcon /> },
          { label: "Careca", icon: <ChevronDownIcon /> },
        ]}
      />
      <div className="py:1 lg:px-6" />
      <DropdownMenu
        label="solutions"
        items={[
          { label: "Boi", icon: <ChevronDownIcon /> },
          { label: "Corno", icon: <ChevronDownIcon /> },
        ]}
      />
      <div className="py:1 lg:px-6" />
      <button className="flex text-sm font-bold text-opacity-80 text-primary-50 uppercase ">
        Pricing
      </button>
      <div className="py-3 lg:pr-10" />
      <Button
        placeholder="Sign in"
        className=" flex border border-button-border bg-white  justify-center items-center  h-10 w-40  border-solid rounded-md font-bold text-button-border uppercase text-xs  "
      />
      <div className="py-2 lg:px-5" />
      <Button
        placeholder="Get early access"
        leftIcon={<EmailIcon />}
        className="  w-[248px]  h-10  flex  items-center  justify-between px-10 rounded-md bg-button-darkTurquoise   font-bold text-white uppercase text-sm  "
      />
    </div>
  );
};
export default Navbar;
