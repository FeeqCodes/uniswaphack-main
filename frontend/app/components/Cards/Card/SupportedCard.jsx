import React from "react";
import CardLayout from "../CardLayout";
import Buttons from "../../Shared/Buttons";
import Image from "next/image";

const SupportedCard = ({ width, height, bg, data }) => {
  return (
    <CardLayout width={width} height={height} bg={bg}>
      <div className="bg-[#1F211C] w-full h-full p-8 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-45 backdrop-saturate-100 backdrop-contrast-10 z-20 relative border-[#656363] border-[0.5px] rounded-md hover:border-[#644881] transition-all duration-300">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <Image src={data.icon} alt={data.name} width={32} height={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{data.name}</h3>
            <p className="text-gray-400">{data.type}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-black/20 p-4 rounded-xl">
            <p className="text-gray-400 text-sm">TVL</p>
            <p className="text-white text-lg font-bold">{data.stats.tvl}</p>
          </div>
          <div className="bg-black/20 p-4 rounded-xl">
            <p className="text-gray-400 text-sm">24h Volume</p>
            <p className="text-white text-lg font-bold">{data.stats.volume}</p>
          </div>
          <div className="bg-black/20 p-4 rounded-xl">
            <p className="text-gray-400 text-sm">Pairs</p>
            <p className="text-white text-lg font-bold">{data.stats.pairs}</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="w-full flex  justify-center">

        <Buttons text="Launch on Platform" />
        </div>
      </div>

      {/* Gradient Background */}
      <div
        className={`absolute bottom-0 right-0 w-[150px] h-[150px] rounded-full bg-gradient-to-r ${data.gradient} blur-lg opacity-20`}
      />
    </CardLayout>
  );
};

export default SupportedCard;
