import { UserButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <div>
      <p>Home</p> 

      <UserButton afterSwitchSessionUrl="/" />
    </div>
  );
};

export default Home;
