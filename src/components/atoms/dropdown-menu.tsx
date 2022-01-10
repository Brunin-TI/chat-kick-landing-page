import { Menu } from "@headlessui/react";
import React from "react";
import { ChevronDownIcon } from "../../assets/icons/Icon";

type ItemsMenu = {
  label: string;
  icon: JSX.Element;
};
interface DropdownMenuProps {
  label: string;
  items: ItemsMenu[];
}
const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items }) => {
  return (
    <Menu as="div" className="relative inline-block ">
      <Menu.Button>
        <div className="flex-row flex items-center ">
          <div className="text-sm font-bold text-opacity-80 text-primary-50 uppercase ">
            {label}
          </div>
          <div className="hidden lg:flex lg:pl-2 ">
            <ChevronDownIcon />
          </div>
        </div>
      </Menu.Button>

      <Menu.Items
        className="flex-col flex  w-60  py-2  mt-1 left-[-75%] rounded-lg items-center justify-center  z-10 absolute  bg-gray-200 "
        as="ul"
      >
        {items.map((item, index) => (
          <Menu.Item key={index} as="li">
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-violet-500 text-white" : "text-gray-900"
                } group flex rounded-md items-center  w-56 px-6 py-2 text-sm h-14`}
              >
                {item.icon}
                <span className="pl-5">{item.label}</span>
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
export default DropdownMenu;
