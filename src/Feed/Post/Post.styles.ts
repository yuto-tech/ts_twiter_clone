import styled from "styled-components";

export const Postlist = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #e6ecf0;
  padding-bottom: 10px;
  .post__body {
    flex: 1;
    padding: 10px;
    img {
      border-radius: 20px;
    }
  }

  .post__footer {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .post__headerDescription {
    margin-bottom: 10px;
    font-size: 15px;
  }

  .post__header__text {
    h3 {
      font-size: 15px;
      margin-bottom: 5px;
    }
  }

  .post__badge {
    font-size: 14px !important;
    color: #50b7f5;
  }

  .post__headerSpecial {
    font-weight: 600;
    font-size: 12px;
    color: gray;
  }

  .post__avatar {
    padding: 20px;
  }
`;
