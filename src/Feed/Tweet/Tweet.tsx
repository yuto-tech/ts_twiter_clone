import React, { useState } from "react";
import { TweetBoxlist } from "./Tweet.styles";
import { Avatar, Button } from "@material-ui/core";
import db from "../../Firebase";

const TweetBox: React.FC = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "yuto",
      username: "yuto-tech",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/ts-twitter-clone.appspot.com/o/pics1.jpg?alt=media&token=4165cecd-3ae9-4cc6-a914-0732c34d13e0",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <TweetBoxlist>
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://firebasestorage.googleapis.com/v0/b/ts-twitter-clone.appspot.com/o/pics1.jpg?alt=media&token=4165cecd-3ae9-4cc6-a914-0732c34d13e0" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </TweetBoxlist>
  );
};

export default TweetBox;
