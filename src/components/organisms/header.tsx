import React from "react";
import { MenuIcon } from "../../assets/icons/Icon";
import { ChatKickLogo } from "../../assets/logo/chatkick-logo";
import Navbar from "../molecules/navbar";

interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  return (
    <div className="flex-col  w-full h-20 items-center lg:flex-row lg:flex   ">
      <div className="flex lg:w-full items-center">
        <div className="flex flex-1 items-start lg:mb-10  ">
          <ChatKickLogo className="h-15 w-40 lg:w-36 lg:h-9" />
        </div>
        <div
          className=" flex w-5 h-5 lg:hidden"
          onClick={() => (showMenu ? setShowMenu(false) : setShowMenu(true))}
        >
          <MenuIcon />
        </div>
      </div>
      <div
        className={`${showMenu ? "flex  z-10 bg-white" : "hidden lg:flex"}  `}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
