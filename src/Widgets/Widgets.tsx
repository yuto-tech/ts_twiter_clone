import React from "react";
import { Widgetslist } from "./Widgets.styles";
import SearchIcon from "@material-ui/icons/Search";
// import {
//   TwitterTimelineEmbed,
//   TwitterShareButton,
//   TwitterTweetEmbed,
// } from "react-twitter-embed";

const Widgets: React.FC = () => {
  return (
    <Widgetslist>
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        {/* <TwitterTweetEmbed tweetId={""} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />
        <TwitterShareButton url={""} options={{ text: "", via: "" }} /> */}
      </div>
    </Widgetslist>
  );
};

export default Widgets;
