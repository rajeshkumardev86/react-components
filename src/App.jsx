import React from "react";
import Accordian from "./components/Accordian";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/StarRating/StarRating";
// import { accordianData } from "../src/assets/data.js";

export default function App() {
  return (
    <div className="max-w-xl mx-auto px-4">
      {/* Accordian Component */}
      {/* <Accordian data={accordianData} isMultiple={false} /> */}
      {/* RandomColor Component */}
      {/* <RandomColor /> */}
      {/* Star Component */}
      <StarRating length={5} />
    </div>
  );
}
