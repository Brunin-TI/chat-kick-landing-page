import { MenuIcon } from "../../assets/icons/Icon";

interface HamburguerMenuProps {
  onChange?: boolean;
}
const HamburguerMenu: React.FC<HamburguerMenuProps> = (onChange) => {
  return (
    <div className="">
      <MenuIcon />
    </div>
  );
};
export default HamburguerMenu;
