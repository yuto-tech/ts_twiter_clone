import React from "react";
import Sideber from "./Sideber/Sideber";
import Feed from "./Feed/Feed";
import Widgets from "./Widgets/Widgets";
import { Applist } from "./App.styles";

//BEM
const App = () => {
  return (
    <Applist>
      <Sideber />
      <Feed />
      <Widgets />
    </Applist>
  );
};

export default App;
