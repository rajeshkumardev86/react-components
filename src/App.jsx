import React from "react";
import Accordian from "./components/Accordian";
import RandomColor from "./components/RandomColor";
// import { accordianData } from "../src/assets/data.js";

export default function App() {
  return (
    <div className="max-w-xl mx-auto px-4">
      {/* Accordian Component */}
      {/* <Accordian data={accordianData} isMultiple={false} /> */}
      {/* RandomColor Component */}
      <RandomColor />
    </div>
  );
}
