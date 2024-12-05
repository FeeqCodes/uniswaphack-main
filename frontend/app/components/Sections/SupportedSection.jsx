import React from "react";
import Title from "../Shared/Title";
import SubTitle from "../Shared/SubTitle";
import SupportedCard from "../Cards/Card/SupportedCard";
import MarginBottom from "../Shared/MarginBottom";
import Grid from "../Shared/Grid";
import MarginTop from "../Shared/MarginTop";




const SupportedSection = () => {
  const supportedAmms = [
    {
      name: "Uniswap V4",
      icon: "/assets/uniswap-uni-logo.svg",
      type: "Decentralized Exchange",
      stats: {
        tvl: "$5.2B",
        volume: "890K",
        pairs: "2.4K",
      },
      gradient: "from-[#FF007A] to-[#291240]",
    },
    // {
    //   name: "QuickSwap",
    //   icon: "/assets/quickswap.svg",
    //   type: "Automated Market Maker",
    //   stats: {
    //     tvl: "$1.8B",
    //     volume: "450K",
    //     pairs: "1.2K",
    //   },
    //   gradient: "from-[#2172E5] to-[#291240]",
    // },
  ];

  return (
    <div className="w-full m-auto">
      <MarginTop  gap="10rem"/>
      <div className="text-center max-w-2xl mx-auto">
        <Title text="Supported AMMs" />
        <SubTitle text="Launch your token on leading decentralized exchanges with built-in liquidity protection" />
      </div>

      <MarginBottom gap="10rem" />

      <Grid cols="2" gap="2rem" justify="center">
        {supportedAmms.map((amm, index) => (
          <SupportedCard
            key={index}
            width="30rem"
            height="20rem"
            bg="#1F211C"
            data={amm}
          />
        ))}
      </Grid>
    </div>
  );
};

export default SupportedSection;
