import styled from "styled-components";

export const Feedlist = styled.div`
  flex: 0.45;
  border-right: 1px solid #e6ecf0;
  min-width: fit-content;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  .feed__header {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 100;
    border-bottom: 1px solid #e6ecf0;
    padding: 15px 20px;
    .h2 {
      font-size: 20px;
      font-weight: 800;
    }
  }
`;
