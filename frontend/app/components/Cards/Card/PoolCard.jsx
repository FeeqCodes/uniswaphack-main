import React from "react";
import Link from "next/link";

const PoolCard = ({ pool }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-500";
      case "Upcoming":
        return "bg-blue-500";
      case "Completed":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Link href={`/pool/${pool.symbol.toLowerCase()}`}>
      <div className="bg-[#1F211C] border border-gray-800 rounded-2xl p-6 hover:border-[#644881] transition-all duration-300">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{pool.name}</h3>
            <p className="text-gray-400">{pool.symbol}</p>
          </div>
          <span
            className={`${getStatusColor(
              pool.status
            )} px-3 py-1 rounded-full text-sm text-white`}
          >
            {pool.status}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="h-2 bg-gray-800 rounded-full mb-2">
            <div
              className="h-full bg-gradient-to-r from-[#644881] to-[#291240] rounded-full"
              style={{ width: `${pool.progress}%` }}
            />
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Progress</span>
            <span className="text-white">{pool.progress}%</span>
          </div>
        </div>

        {/* Pool Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-400 text-sm mb-1">Raised</p>
            <p className="text-white font-semibold">{pool.raised}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Target</p>
            <p className="text-white font-semibold">{pool.target}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Ratio</p>
            <p className="text-white font-semibold">{pool.ratio}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Time Left</p>
            <p className="text-white font-semibold">{pool.timeLeft}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">👥</span>
            <span className="text-white">{pool.participants} participants</span>
          </div>
          <button className="text-[#644881] hover:text-white transition-colors">
            View Details →
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PoolCard;
