import React from "react";
import MarginTop from "../../Shared/MarginTop";
import MarginBottom from "../../Shared/MarginBottom";
import IloForm from "../../Forms/IloForm";

const IloSection = () => {
  return (
    <>
      <MarginTop gap="10rem" />
      <div className="min-h-screen w-full bg-[#1F211C] relative inset-0  shadow-[0_0_30px_rgba(100,72,129,0.2)] group">
        {/* Background Elements */}
        {/* <div className="absolute inset-0 bg-[#1F211C]  shadow-[0_0_30px_rgba(100,72,129,0.2)] group ">
          <div className="absolute top-20 right-40 w-72 h-72 bg-gradient-to-r from-[#644881] to-transparent rounded-full blur-[120px] opacity-20" />
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-r from-[#448175] to-transparent rounded-full blur-[150px] opacity-10" />
        </div> */}

        {/* Content */}
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

          <IloForm />
        </div>
      </div>
      <MarginBottom gap=" 15rem" />
    </>
  );
};

export default IloSection;
