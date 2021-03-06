import React from "react";
import { SidebarOptionStyled } from "./Sidebar.Option.styles";

type SidebarOptionProps = {
  text: string;
  Icon: any;
};

const SidebarOption: React.FC<SidebarOptionProps> = ({ text, Icon }) => {
  return (
    <SidebarOptionStyled>
      <Icon />
      <h2>{text}</h2>
    </SidebarOptionStyled>
  );
};

export default SidebarOption;
