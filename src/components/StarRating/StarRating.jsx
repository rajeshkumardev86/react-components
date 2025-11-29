import React from "react";
import "./style.css";

export default function StarRating({ length }) {
  const [rating, setRating] = React.useState(0);
  const [hovered, setHovered] = React.useState(0);

  function handleClick(currentIndex) {
    setRating(currentIndex);
  }

  function handleMouseEnter(currentIndex) {
    setHovered(currentIndex);
  }

  function handleMouseLeave() {
    setHovered(0);
  }

  return (
    <div className="flex flex-between gap-1 py-2">
      {Array.from({ length }).map((_, index) => {
        index = index + 1;
        return (
          <span
            key={index}
            onClick={() => handleClick(index)}
            className={
              index <= (hovered || rating)
                ? "text-3xl text-yellow-300"
                : "text-3xl"
            }
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}
