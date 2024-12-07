"use client";

import React, { useState } from "react";
import MarginTop from "../../Shared/MarginTop";
import MarginBottom from "../../Shared/MarginBottom";
import IloForm from "../../Forms/IloForm";
import { launchToken } from "@/app/utils/contract";

const IloSection = () => {
  const [isLaunching, setIsLaunching] = useState(false);

  const handleLaunch = async (formData) => {
    try {
      setIsLaunching(true);
      const launchData = {
        token: formData.tokenAddress,
        baseCurrency: formData.baseCurrency,
        saleTarget: formData.saleTarget,
        totalSales: 0, // Initialize as 0
        rewardFactorBps: formData.rewardFactor,
        poolFee: formData.poolFee,
        tickSpacing: formData.tickSpacing,
        presaleDuration: formData.presaleDuration,
        vestingDuration: formData.vestingDuration,
        launchedAt: BigInt(Math.floor(Date.now() / 1000)), // Current timestamp
        updatedAt: BigInt(Math.floor(Date.now() / 1000)), // Current timestamp
        sqrtPriceX96: formData.sqrtPrice,
        launchStatus: 0, // PRESALE status
      };

      const result = await launchToken(launchData);
      console.log("Launch successful:", result);
    } catch (error) {
      console.error("Launch failed:", error);
    } finally {
      setIsLaunching(false);
    }
  };

  return (
    <>
      <MarginTop gap="10rem" />
      <div className="min-h-screen w-full bg-[#1F211C] relative inset-0 shadow-[0_0_30px_rgba(100,72,129,0.2)] group">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h1 className="text-4xl font-bold text-white mb-3">
                Create ILO Pool
              </h1>
              <p className="text-gray-400 max-w-xl">
                Launch your token with customizable parameters and built-in
                liquidity protection mechanisms
              </p>
            </div>
            <div className="bg-[#1F211C]/60 p-4 rounded-xl border border-gray-800">
              <p className="text-gray-400 text-sm">Current Gas Price</p>
              <p className="text-2xl font-bold text-white">12 GWEI</p>
            </div>
          </div>

          <IloForm onSubmit={handleLaunch} isLaunching={isLaunching} />
        </div>
      </div>
      <MarginBottom gap=" 15rem" />
    </>
  );
};

export default IloSection;
