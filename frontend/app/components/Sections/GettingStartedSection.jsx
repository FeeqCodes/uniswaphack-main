import React from "react";
import MarginTop from "../Shared/MarginTop";
import MarginBottom from "../Shared/MarginBottom";
import Buttons from "../Shared/Buttons";

const GettingStartedSection = () => {
  const steps = [
    {
      number: "01",
      title: "Connect Wallet",
      description:
        "Connect your Web3 wallet to get started with token launches",
      icon: "🔗",
      color: "from-[#644881]",
    },
    {
      number: "02",
      title: "Create ILO Pool",
      description:
        "Configure your token parameters, ratios, and liquidity thresholds",
      icon: "🚀",
      color: "from-[#448175]",
    },
    {
      number: "03",
      title: "Lock Liquidity",
      description: "Set your lock duration and minimum liquidity requirements",
      icon: "🔒",
      color: "from-[#816444]",
    },
    {
      number: "04",
      title: "Launch Token",
      description:
        "Once threshold is met, trading begins automatically on Uniswap V4",
      icon: "✨",
      color: "from-[#644881]",
    },
  ];

  return (
    <>
      <MarginTop gap="10rem" />
      <div className="py-20 relative">
        {/* Background Elements */}
        <div className="absolute top-20 right-40 w-96 h-96 bg-gradient-to-r from-[#644881] to-transparent rounded-full blur-[120px] opacity-20" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Getting Started
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Launch your token in minutes with our streamlined process
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-12 right-0 w-full h-[2px] bg-gradient-to-r from-[#644881] to-[#291240]" />
                )}

                {/* Step Card */}
                <div className="bg-[#1F211C] border border-gray-800 rounded-2xl p-6 relative z-10">
                  <div className="flex flex-col items-start">
                    <span className="text-4xl mb-4">{step.icon}</span>
                    <span
                      className={`text-sm bg-gradient-to-r ${step.color} to-[#291240] bg-clip-text text-transparent font-bold`}
                    >
                      STEP {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-white my-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="text-center mt-16">
            <Buttons text="Start Building Now" />
            
          </div>
        </div>
      </div>

      <MarginBottom gap="15rem" />
    </>
  );
};

export default GettingStartedSection;
