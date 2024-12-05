import React from "react";

const LiquidityModal = ({ pool, isOpen, onClose }) => {
  if (!isOpen || !pool) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#1F211C] rounded-2xl p-8 w-[480px] border border-gray-800 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Add Liquidity</h3>
          <p className="text-gray-400">
            {pool.name} ({pool.symbol})
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-[#291240] rounded-xl p-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Input</span>
              <span className="text-gray-400">Balance: 0.00</span>
            </div>
            <div className="flex items-center">
              <input
                type="number"
                placeholder="0.0"
                className="bg-transparent text-2xl text-white outline-none w-full"
              />
              <button className="bg-[#644881] text-white px-4 py-2 rounded-xl ml-2">
                ETH
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <span className="bg-[#291240] p-2 rounded-full text-white">↓</span>
          </div>

          <div className="bg-[#291240] rounded-xl p-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">You'll receive</span>
              <span className="text-gray-400">Rate: {pool.ratio}</span>
            </div>
            <div className="flex items-center">
              <input
                type="number"
                placeholder="0.0"
                className="bg-transparent text-2xl text-white outline-none w-full"
                disabled
              />
              <span className="text-white px-4 py-2 rounded-xl ml-2">
                {pool.symbol}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#291240] rounded-xl p-4 mb-6">
          <div className="flex justify-between text-gray-400 mb-2">
            <span>Pool Progress</span>
            <span>{pool.progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[#644881] to-[#448175] h-2 rounded-full"
              style={{ width: `${pool.progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className="text-gray-400">Raised: {pool.raised}</span>
            <span className="text-gray-400">Target: {pool.target}</span>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-[#644881] to-[#448175] text-white py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
          Add Liquidity
        </button>
      </div>
    </div>
  );
};

export default LiquidityModal;
