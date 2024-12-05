import React from "react";
import CardLayout from "../CardLayout";
import Buttons from "../../Shared/Buttons";

const StrategyCard = ({
  width,
  height,
  bg,
  title,
  icon,
  description,
  benefits,
  buttonText,
  color,
}) => {
  return (
    <CardLayout width={width} height={height} bg={bg}>
      <div
        className="bg-[#1F211C] w-full h-full flex flex-col p-8 bg-clip-padding
          backdrop-filter backdrop-blur bg-opacity-45 backdrop-saturate-100
          backdrop-contrast-10 z-20 relative border-[#656363] border-[0.5px] rounded-md"
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-4xl">{icon}</span>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-8 text-center">{description}</p>

        {/* Benefits List */}
        <div className="flex-1">
          <h4 className="text-white text-lg mb-4">Features:</h4>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center items-center text-gray-300">
                <span className="w-2 h-2 rounded-full bg-[#644881] mr-3"></span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <Buttons text={buttonText} color="white" />
        </div>
      </div>

      {/* Gradient Background */}
      <div
        className={`absolute bottom-0 right-0 w-[150px] h-[150px] rounded-full z-5 
        bg-gradient-to-r ${color} to-[#291240] blur-lg backdrop-blur-lg opacity-40`}
      ></div>
    </CardLayout>
  );
};

export default StrategyCard;
