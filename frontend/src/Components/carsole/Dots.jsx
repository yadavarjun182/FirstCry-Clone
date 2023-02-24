import React from "react";

const Dots = ({ activeIndex, onClick, imageSlider }) => {
  return (
    <div className="all-dots">
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot "}`}
          onClick={() => onClick(index)}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
