import styled from "styled-components";

export const SidebarOptionStyled = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #e8f5fe;
    border-radius: 30px;
    color: #50b7f5;
    transition: color 100ms ease-out;
  }

  &:active {
    color: #50b7f5;
  }

  .MuiSvgIcon-root {
    padding: 20px;
  }

  h2 {
    font-weight: 800;
    font-size: 20px;
    margin-right: 20px;
  }
`;
