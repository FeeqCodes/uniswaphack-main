import React from "react";
import CardLayout from "../Cards/CardLayout";

const IloForm = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <CardLayout
          width="100%"
          height="auto"
          bg="#1F211C"
          className="rounded-2xl p-8"
        >
          <form className="space-y-8">
            {/* Token Configuration */}
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
                <div>
                  <label className="text-gray-400 text-sm block mb-2">
                    Sale Target Amount
                  </label>
                  <input
                    className="w-full bg-[#1F211C] text-white p-4 rounded-xl outline-none border border-gray-800 focus:border-[#644881] transition-colors"
                    type="number"
                    placeholder="Enter total tokens for sale"
                  />
                </div>
              </div>
            </div>

            {/* Pool Parameters */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Pool Parameters</h3>
              <div className="bg-[#0A0F02] p-6 rounded-xl space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">
                      Base Currency
                    </label>
                    <input
                      className="w-full bg-[#1F211C] text-white p-4 rounded-xl outline-none border border-gray-800 focus:border-[#644881] transition-colors"
                      type="text"
                      placeholder="Base currency address"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">
                      Reward Factor (BPS)
                    </label>
                    <input
                      className="w-full bg-[#1F211C] text-white p-4 rounded-xl outline-none border border-gray-800 focus:border-[#644881] transition-colors"
                      type="number"
                      placeholder="10000 = 1:1 ratio"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">
                      Pool Fee
                    </label>
                    <input
                      className="w-full bg-[#1F211C] text-white p-4 rounded-xl outline-none border border-gray-800 focus:border-[#644881] transition-colors"
                      type="number"
                      placeholder="Fee in basis points"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">
                      Tick Spacing
                    </label>
                    <input
                      className="w-full bg-[#1F211C] text-white p-4 rounded-xl outline-none border border-gray-800 focus:border-[#644881] transition-colors"
                      type="number"
                      placeholder="Enter tick spacing"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">
                      Presale Duration (seconds)
                    </label>
                    <input
                      className="w-full bg-[#1F211C] text-white p-4 rounded-xl outline-none border border-gray-800 focus:border-[#644881] transition-colors"
                      type="number"
                      placeholder="Duration in seconds"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">
                      Vesting Duration (seconds)
                    </label>
                    <input
                      className="w-full bg-[#1F211C] text-white p-4 rounded-xl outline-none border border-gray-800 focus:border-[#644881] transition-colors"
                      type="number"
                      placeholder="Duration in seconds"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm block mb-2">
                    Initial sqrt Price X96
                  </label>
                  <input
                    className="w-full bg-[#1F211C] text-white p-4 rounded-xl outline-none border border-gray-800 focus:border-[#644881] transition-colors"
                    type="number"
                    placeholder="Initial sqrt price scaled by 2^96"
                  />
                </div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#644881] to-[#291240] text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-all">
              Create ILO Pool
            </button>
          </form>
        </CardLayout>
      </div>

      {/* Preview Panel */}
      <div className="space-y-6">
        <CardLayout
          width="100%"
          height="auto"
          bg="#1F211C"
          className="rounded-2xl p-6"
        >
          <h3 className="text-lg font-bold text-white mb-4">Pool Preview</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Launch Status</span>
              <span className="text-white">PRESALE</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Protocol Fee</span>
              <span className="text-white">Calculate based on sale target</span>
            </div>
          </div>
        </CardLayout>

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
