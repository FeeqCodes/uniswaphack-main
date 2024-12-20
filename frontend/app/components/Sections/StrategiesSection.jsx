import React from "react";
import MarginTop from "../Shared/MarginTop";
import StrategyCard from "../Cards/Card/StrategyCard";
import Grid from "../Shared/Grid";
import MarginBottom from "../Shared/MarginBottom";

const StrategiesSection = () => {
  const strategies = [
    {
      title: "Launch Your Token",
      icon: "🚀",
      description: "Create your ILO pool with customizable parameters",
      benefits: [
        "Custom token ratios (1:1, 1:2, etc)",
        "ETH or USDC as base pair",
        "Set liquidity thresholds",
        "Configurable lock periods",
      ],
      buttonText: "Create ILO",
      color: "from-[#644881]",
      href: "/create-ilo",
    },
    {
      title: "Provide Liquidity",
      icon: "💎",
      description: "Participate in upcoming token launches",
      benefits: [
        "Early access to new tokens",
        "Protected liquidity pools",
        "Automated reward distribution",
        "Transparent pool metrics",
      ],
      buttonText: "View Pools",
      color: "from-[#448175]",
      href: "/explore-pools",
    },
  ];

  return (
    <div>
      {/* <MarginTop gap="15rem" /> */}
      <Grid cols="2" justify="center" gap="5rem">
        {strategies.map((strategy, index) => (
          <StrategyCard
            key={index}
            {...strategy}
            width="22rem"
            height="35rem"
            bg="#1F211C"
          />
        ))}
      </Grid>

      <MarginBottom gap="10rem" />
    </div>
  );
};

export default StrategiesSection;
