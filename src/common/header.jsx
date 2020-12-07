import React from "react";
import { HeaderWrapper } from "../commonStyles/header";
import Logo from "../assets/images/BlueStacks_Logo.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={Logo} alt="BlueStacks logo" />
    </HeaderWrapper>
  );
};

export default Header;
