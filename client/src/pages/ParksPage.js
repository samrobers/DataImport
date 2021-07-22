import React from "react";
import ALWList from "../components/ALWList";
import ALCList from "../components/ALCList";
import ALEList from "../components/ALEList";
import NLWList from "../components/NLWList";
import NLCList from "../components/NLCList";
import NLEList from "../components/NLEList";

const ParksPage = () => {
  return (
    <>
      <div>
        <h1>American League</h1>
      </div>

      <ALWList />
      <ALCList />
      <ALEList />
      <div>
        <h1>National League</h1>
      </div>
      <NLWList />
      <NLEList />
      <NLCList />
    </>
  );
};

export default ParksPage;
