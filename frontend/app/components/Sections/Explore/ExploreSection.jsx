import React from "react";
import PoolCard from "@/app/components/Cards/Card/PoolCard";
import SearchBar from "@/app/components/Shared/SearchBar";
import MarginBottom from "../../Shared/MarginBottom";
import MarginTop from "../../Shared/MarginTop";

const ExploreSection = () => {
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

  return (
    <>
    <MarginTop gap="10rem" />
      <div className="min-h-screen w-full bg-[#1F211C] relative">
        {/* Background Gradients */}
        <div className="absolute top-20 right-40 w-96 h-96 bg-gradient-to-r from-[#644881] to-transparent rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-gradient-to-r from-[#448175] to-transparent rounded-full blur-[150px] opacity-10" />

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
              <PoolCard key={index} pool={pool} />
            ))}
          </div>
        </div>
      </div>

      <MarginBottom gap="15rem" />
    </>
  );
};

export default ExploreSection;
