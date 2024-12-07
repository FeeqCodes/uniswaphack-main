import React from "react";
import MarginTop from "../Shared/MarginTop";
import MarginBottom from "../Shared/MarginBottom";
import Buttons from "../Shared/Buttons";
import Link from "next/link";

const GettingStartedSection = () => {
  const creatorSteps = [
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

  const providerSteps = [
    {
      number: "01",
      title: "Connect Wallet",
      description: "Connect your Web3 wallet to access available ILO pools",
      icon: "🔗",
      color: "from-[#448175]",
    },
    {
      number: "02",
      title: "Select Pool",
      description: "Browse active ILO pools and review token metrics",
      icon: "🔍",
      color: "from-[#644881]",
    },
    {
      number: "03",
      title: "Provide Liquidity",
      description: "Deposit ETH or USDC to participate in the token launch",
      icon: "💎",
      color: "from-[#816444]",
    },
    {
      number: "04",
      title: "Earn Rewards",
      description:
        "Receive tokens and potential rewards once pool is activated",
      icon: "🎁",
      color: "from-[#448175]",
    },
  ];

  return (
    <>
      <MarginTop gap="10rem" />
      <div className="py-20 relative">
        <div className="absolute top-20 right-40 w-96 h-96 bg-gradient-to-r from-[#644881] to-transparent rounded-full blur-[120px] opacity-20" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Getting Started
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose your path: Launch a token or provide liquidity
            </p>
          </div>

          {/* Token Creator Flow */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Token Creator Path
            </h3>
            <div className="grid grid-cols-4 gap-8">
              {creatorSteps.map((step, index) => (
                <div key={index} className="relative">
                  {index < creatorSteps.length - 1 && (
                    <div className="absolute top-12 right-0 w-full h-[2px] bg-gradient-to-r from-[#644881] to-[#291240]" />
                  )}
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
          </div>

          {/* Liquidity Provider Flow */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Liquidity Provider Path
            </h3>
            <div className="grid grid-cols-4 gap-8">
              {providerSteps.map((step, index) => (
                <div key={index} className="relative">
                  {index < providerSteps.length - 1 && (
                    <div className="absolute top-12 right-0 w-full h-[2px] bg-gradient-to-r from-[#448175] to-[#291240]" />
                  )}
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
          </div>

          <div className="text-center mt-16">
            <Link href="/create-ilo">
            <Buttons text="Start Building Now" />
            </Link>
          </div>
        </div>
      </div>
      <MarginBottom gap="10rem" />
    </>
  );
};

export default GettingStartedSection;
