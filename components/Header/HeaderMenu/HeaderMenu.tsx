import React from "react";
import SingleItem from "./SingleItem";
import { MenuItems } from "./HeaderMenu.styles";

const menuList = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "popular",
    title: "Popular",
  },
  {
    id: "all",
    title: "All",
  },
  {
    id: "random",
    title: "Random",
  },
];

interface HeaderMenuProps {
  activeItem?: string;
}

const HeaderMenu = ({ activeItem }: HeaderMenuProps) => (
  <MenuItems>
    {menuList.length > 0 &&
      menuList.map((item) => (
        <SingleItem
          key={`headerMenu_${item.id}`}
          active={activeItem === item.id}
          item={item}
        />
      ))}
  </MenuItems>
);

export default HeaderMenu;
