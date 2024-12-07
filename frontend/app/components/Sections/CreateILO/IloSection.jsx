"use client";

import React, { useState } from "react";
import MarginTop from "../../Shared/MarginTop";
import MarginBottom from "../../Shared/MarginBottom";
import IloForm from "../../Forms/IloForm";
import { launchToken } from "@/app/utils/contract";
import { useRouter } from "next/navigation";
import LoadingModal from "./LoadingModal";



const IloSection = () => {
  const router = useRouter();

  const [isLaunching, setIsLaunching] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    status: "loading",
    message: "",
  });

  const handleLaunch = async (formData) => {
    try {
      setIsLaunching(true);
      setModalState({
        isOpen: true,
        status: "loading",
        message: "Launching your token...",
      });

      const launchData = {
        token: formData.tokenAddress,
        baseCurrency: formData.baseCurrency,
        saleTarget: BigInt(formData.saleTarget),
        totalSales: BigInt(0),
        rewardFactorBps: BigInt(formData.rewardFactor),
        poolFee: BigInt(formData.poolFee),
        tickSpacing: BigInt(formData.tickSpacing),
        presaleDuration: BigInt(formData.presaleDuration),
        vestingDuration: BigInt(formData.vestingDuration),
        launchedAt: BigInt(Math.floor(Date.now() / 1000)),
        updatedAt: BigInt(Math.floor(Date.now() / 1000)),
        sqrtPriceX96: BigInt(formData.sqrtPrice),
        launchStatus: 0,
      };

      const result = await launchToken(launchData);

      setModalState({
        isOpen: true,
        status: "success",
        message: `Launch successful! Transaction: ${result.slice(0, 10)}...`,
      });

      setTimeout(() => {
        setModalState({ isOpen: false, status: "", message: "" });
        router.push("/explore-pools");

      }, 3000);

    } catch (error) {
      setModalState({
        isOpen: true,
        status: "error",
        message: `Launch failed: ${error.message}`,
      });

      setTimeout(() => {
        setModalState({ isOpen: false, status: "", message: "" });
      }, 3000);

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
      <LoadingModal
        isOpen={modalState.isOpen}
        status={modalState.status}
        message={modalState.message}
      />
      <MarginBottom gap=" 15rem" />
    </>
  );
};

export default IloSection;
