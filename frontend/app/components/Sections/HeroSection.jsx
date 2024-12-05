import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center mt-10">
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#644881] to-[#291240] blur-[120px] opacity-30" />
      <div className="absolute bottom-40 right-20 w-[250px] h-[250px] rounded-full bg-gradient-to-r from-[#448175] to-[#291240] blur-[100px] opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Launch Your Token <br />
              <span className="text-[#644881]">With Confidence</span>
            </h1>

            <p className="text-gray-400 text-xl leading-relaxed">
              The most secure and efficient way to launch your token with locked
              liquidity. Powered by Uniswap V4 for maximum security and
              transparency.
            </p>

            <div className="flex gap-6">
              <Link href="/create-ilo">
                <button className="px-8 py-4 bg-gradient-to-r from-[#644881] to-[#291240] rounded-xl text-white font-semibold hover:opacity-90 transition-all">
                  Launch Token
                </button>
              </Link>
              <Link href="/explore-pools">
                <button className="px-8 py-4 border border-[#644881] rounded-xl text-white font-semibold hover:bg-[#644881]/10 transition-all">
                  Explore Pools
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-white">$24M+</h3>
                <p className="text-gray-400">Total Liquidity</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">150+</h3>
                <p className="text-gray-400">Successful Launches</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">12K+</h3>
                <p className="text-gray-400">Active Users</p>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Visual */}
          <div className="relative">
            <div className="relative h-[500px] w-[500px]">
              {/* Add your 3D token visualization or animated graphics here */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#644881]/20 to-transparent rounded-full animate-pulse" />
              <div className="absolute inset-10 bg-gradient-to-r from-[#448175]/20 to-transparent rounded-full animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-[#644881] rounded-full animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-[#448175] rounded-full animate-float-delay" />
    </div>
  );
};

export default HeroSection;
