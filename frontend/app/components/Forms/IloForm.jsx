import React from "react";
import CardLayout from "../Cards/CardLayout";

const IloForm = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {/* Main Form */}
      <div className="col-span-2">
        <CardLayout
          width="100%"
          height="auto"
          bg="#1F211C"
          className="rounded-2xl p-8"
        >
          <form className="space-y-8">
            {/* Token Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">
                Token Configuration
              </h3>
              <div className="bg-[#0A0F02] p-6 rounded-xl space-y-6">
                <div>
                  <label className="text-gray-400 text-sm block mb-2">
                    Token Address
                  </label>
                  <input
                    className="w-full bg-[#1F211C] text-white p-4 rounded-xl outline-none border border-gray-800 focus:border-[#644881] transition-colors"
                    type="text"
                    placeholder="0x..."
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">
                      Token Name
                    </label>
                    <input
                      className="w-full bg-[#1F211C] text-white p-4 rounded-xl outline-none border border-gray-800 focus:border-[#644881] transition-colors"
                      type="text"
                      placeholder="Enter token name"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">
                      Token Symbol
                    </label>
                    <input
                      className="w-full bg-[#1F211C] text-white p-4 rounded-xl outline-none border border-gray-800 focus:border-[#644881] transition-colors"
                      type="text"
                      placeholder="Symbol"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pool Configuration */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Pool Parameters</h3>
              <div className="bg-[#0A0F02] p-6 rounded-xl space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">
                      Base Currency
                    </label>
                    <select className="w-full bg-[#1F211C] text-white p-4 rounded-xl outline-none border border-gray-800 focus:border-[#644881] transition-colors">
                      <option value="eth">ETH</option>
                      <option value="usdc">USDC</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">
                      Token Ratio
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        className="w-full bg-[#1F211C] text-white p-4 rounded-xl outline-none border border-gray-800 focus:border-[#644881] transition-colors"
                        type="number"
                        placeholder="1"
                      />
                      <span className="text-white text-2xl">:</span>
                      <input
                        className="w-full bg-[#1F211C] text-white p-4 rounded-xl outline-none border border-gray-800 focus:border-[#644881] transition-colors"
                        type="number"
                        placeholder="1"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">
                      Start Date
                    </label>
                    <input
                      className="w-full bg-[#1F211C] text-white p-4 rounded-xl outline-none border border-gray-800 focus:border-[#644881] transition-colors"
                      type="datetime-local"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">
                      End Date
                    </label>
                    <input
                      className="w-full bg-[#1F211C] text-white p-4 rounded-xl outline-none border border-gray-800 focus:border-[#644881] transition-colors"
                      type="datetime-local"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              className="w-full bg-gradient-to-r from-[#644881] to-[#291240] text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-all"
              type="submit"
            >
              Create ILO Pool
            </button>
          </form>
        </CardLayout>
      </div>

      {/* Side Panel */}
      <div className="space-y-6">
        {/* Pool Preview */}
        <CardLayout
          width="100%"
          height="auto"
          bg="#1F211C"
          className="rounded-2xl p-6"
        >
          <h3 className="text-lg font-bold text-white mb-4">Pool Preview</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Initial Rate</span>
              <span className="text-white">1 ETH = 1000 TOKEN</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Pool Duration</span>
              <span className="text-white">7 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Lock Period</span>
              <span className="text-white">180 days</span>
            </div>
          </div>
        </CardLayout>

        {/* Gas Estimation */}
        <CardLayout
          width="100%"
          height="auto"
          bg="#1F211C"
          className="rounded-2xl p-6"
        >
          <h3 className="text-lg font-bold text-white mb-4">Estimated Gas</h3>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Deploy Cost</span>
            <span className="text-white">~0.05 ETH</span>
          </div>
        </CardLayout>
      </div>
    </div>
  );
};

export default IloForm;
