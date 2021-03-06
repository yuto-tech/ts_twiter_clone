import React, { useState, useEffect } from "react";
import TweetBox from "./Tweet/Tweet";
import { Feedlist } from "./Feed.styles";
import Post from "./Post/Post";
import db from "../Firebase";

type post = {
  displayName: string;
  username: string;
  verified: boolean;
  text: string;
  image: string;
  avatar: string;
};

const Feed: React.FC = (PostProps) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot: any) =>
      setPosts(snapshot.docs.map((doc: any) => doc.data()))
    );
  }, []);
  return (
    <Feedlist>
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map((post: post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </Feedlist>
  );
};

export default Feed;
