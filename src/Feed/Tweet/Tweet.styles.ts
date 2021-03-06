import styled from "styled-components";

export const TweetBoxlist = styled.div`
  padding-bottom: 10px;
  border-bottom: 8px solid #e6ecf0;
  padding-right: 10px;
  form {
    display: flex;
    flex-direction: column;
  }

  .tweetBox__input {
    padding: 20px;
    display: flex;
    input {
      flex: 1;
      margin-left: 20px;
      font-size: 20px;
      border: none;
    }
  }

  .tweetBox__imageInput {
    border: none;
    padding: 10px;
  }

  .tweetBox__tweetButton {
    background-color: #50b7f5 !important;
    border: none !important;
    color: white !important;
    font-weight: 900 !important;
    text-transform: inherit !important;
    border-radius: 30px !important;
    width: 80px;
    height: 40px !important;
    margin-top: 20px !important;
    margin-left: auto !important;
  }
`;
