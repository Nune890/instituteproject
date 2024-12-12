import React from "react";
import Institute from "./institute/Institute";
import MessageDean from "./MessageDean/MessageDean";
import YourCareer from "./yourCareer/YourCareer";
import Scholarship from "./scholarship/Scholarship";
import WhoWeAre from "./whoWeAre/WhoWeAre";
import RecognitionOfPrior from "./RecognitionOfPrior/RecognitionOfPrior";

const Home = () => {
  return (
    <div>
      <Institute />
      <MessageDean />
      <YourCareer />
      <Scholarship />
      <WhoWeAre />
      <RecognitionOfPrior />
    </div>
  );
};

export default Home;
