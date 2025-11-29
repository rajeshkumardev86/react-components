import React from "react";

export default function RandomColor() {
  const [color, setColor] = React.useState("#000000");
  const [typeOfColor, setTypeOfColor] = React.useState("HEX");

  function handleHexColor() {
    setTypeOfColor("HEX");
    const hexChars = "0123456789ABCDEF";
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hexChars[Math.floor(Math.random() * 16)];
    }
    setColor(hexColor);
  }

  function handleRgbColor() {
    setTypeOfColor("RGB");
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  return (
    <div className="w-screen h-screen" style={{ backgroundColor: color }}>
      <div className="flex justify-center">
        <button
          className="h-10 w-50 bg-slate-600 m-2 text-white"
          onClick={() => handleHexColor()}
        >
          Create HEX Color
        </button>
        <button
          className="h-10 w-50 bg-slate-600 m-2 text-white"
          onClick={() => handleRgbColor()}
        >
          Create RGB Color
        </button>
        <button
          className="h-10 w-50 bg-slate-600 m-2 text-white"
          onClick={() => {
            typeOfColor === "HEX" ? handleHexColor() : handleRgbColor();
          }}
        >
          Generate Random Color
        </button>
      </div>
      <div className="flex justify-center gap-4">
        <h3 className="text-3xl text-white mt-4">{typeOfColor}</h3>
        <h1 className="text-3xl text-sblack mt-4">{color}</h1>
      </div>
    </div>
  );
}
