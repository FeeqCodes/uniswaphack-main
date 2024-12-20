"use client";

import React, { useState } from "react";
import PoolCard from "@/app/components/Cards/Card/PoolCard";
import SearchBar from "@/app/components/Shared/SearchBar";
import MarginBottom from "../../Shared/MarginBottom";
import MarginTop from "../../Shared/MarginTop";
import LiquidityModal from "../../LiquidityModal";

const ExploreSection = () => {
  const [selectedPool, setSelectedPool] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pools = [
    {
      name: "MetaVerse Token",
      symbol: "MVT",
      status: "Active",
      progress: 75,
      raised: "125.5 ETH",
      target: "150 ETH",
      ratio: "1:1000",
      timeLeft: "2d 15h",
      participants: 234,
    },
    {
      name: "DeFi Protocol",
      symbol: "DFP",
      status: "Upcoming",
      progress: 0,
      raised: "0 ETH",
      target: "300 ETH",
      ratio: "1:2000",
      timeLeft: "5d 8h",
      participants: 0,
    },
    {
      name: "GameFi Token",
      symbol: "GFT",
      status: "Completed",
      progress: 100,
      raised: "200 ETH",
      target: "200 ETH",
      ratio: "1:500",
      timeLeft: "Ended",
      participants: 456,
    },
  ];

  const handlePoolClick = (pool) => {
    setSelectedPool(pool);
    setIsModalOpen(true);
  };

  return (
    <>
      <MarginTop gap="10rem" />
      <div className="min-h-screen w-full bg-[#1F211C] relative inset-0  shadow-[0_0_30px_rgba(100,72,129,0.2)] group">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-white mb-3">
                Explore Pools
              </h1>
              <p className="text-gray-400">
                Discover and participate in active and upcoming token launches
              </p>
            </div>
            <div className="flex gap-4">
              <select className="bg-[#291240] text-white px-4 py-2 rounded-xl outline-none">
                <option value="all">All Pools</option>
                <option value="active">Active</option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
              </select>
              <SearchBar placeholder="Search pools..." />
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-4 gap-6 mb-12">
            {[
              { label: "Total Pools", value: "24" },
              { label: "Total Value Locked", value: "$2.4M" },
              { label: "Active Pools", value: "8" },
              { label: "Participants", value: "1.2K" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-[#291240] p-6 rounded-xl border border-gray-800"
              >
                <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Pool Grid */}
          <div className="grid grid-cols-3 gap-6">
            {pools.map((pool, index) => (
              <div
                key={index}
                className="cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                <PoolCard 
                pool={pool} 
                onClick={() => handlePoolClick(pool)} 
              />
              </div>
            ))}{" "}
          </div>
        </div>
      </div>

      {/* Liquidity Modal */}
      <LiquidityModal
        pool={selectedPool}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <MarginBottom gap="15rem" />
    </>
  );
};

export default ExploreSection;







// "use client";

// import React, { useState, useEffect } from "react";
// import { useContract } from "@/app/context/Web3Provider.jsx";

// const ExploreSection = () => {
//   const [launchedPools, setLaunchedPools] = useState([]);
//   const { contract } = useContract();

//   // Function to format on-chain data
//   const formatPoolData = (rawPool) => ({
//     token: rawPool.token,
//     baseCurrency: rawPool.baseCurrency,
//     saleTarget: rawPool.saleTarget.toString(),
//     totalSales: rawPool.totalSales.toString(),
//     rewardFactorBps: rawPool.rewardFactorBps,
//     poolFee: rawPool.poolFee,
//     tickSpacing: rawPool.tickSpacing,
//     presaleDuration: rawPool.presaleDuration,
//     vestingDuration: rawPool.vestingDuration,
//     launchedAt: rawPool.launchedAt,
//     updatedAt: rawPool.updatedAt,
//     sqrtPriceX96: rawPool.sqrtPriceX96,
//     launchStatus: rawPool.launchStatus,
//     // Calculate UI values
//     progress: (rawPool.totalSales / rawPool.saleTarget) * 100,
//     ratio: `1:${rawPool.rewardFactorBps / 10000}`,
//     timeLeft: calculateTimeRemaining(rawPool.launchedAt, rawPool.presaleDuration)
//   });

//   // Fetch pools from smart contract
//   const fetchPools = async () => {
//     try {
//       const pools = await contract.getAllLaunches();
//       const formattedPools = pools.map(formatPoolData);
//       setLaunchedPools(formattedPools);
//     } catch (error) {
//       console.error("Failed to fetch pools:", error);
//     }
//   };

//   // Time calculation helper
//   const calculateTimeRemaining = (launchTime, duration) => {
//     const endTime = Number(launchTime) + Number(duration);
//     const now = Math.floor(Date.now() / 1000);
//     const remaining = endTime - now;
    
//     if (remaining <= 0) return "Ended";
//     const days = Math.floor(remaining / 86400);
//     const hours = Math.floor((remaining % 86400) / 3600);
//     return `${days}d ${hours}h`;
//   };

//   useEffect(() => {
//     fetchPools();
//     // Set up polling interval to keep data fresh
//     const interval = setInterval(fetchPools, 15000);
//     return () => clearInterval(interval);
//   }, [contract]);

//   // Rest of your component code remains the same, but use launchedPools instead of the static pools array
//   return (
//     // ... existing JSX using launchedPools instead of static pools
//   );
// };

// export default ExploreSection;
