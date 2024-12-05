import Image from "next/image";
import HeroSection from "../components/Sections/HeroSection";
import SupportedSection from "../components/Sections/SupportedSection";
import Title from "../components/Shared/Title";
import StrategiesSection from "../components/Sections/StrategiesSection";
import ProtocolFeatures from "../components/Sections/ProtocolFeatures";
import GettingStartedSection from "../components/Sections/GettingStartedSection";

export default function Home() {
  return (
    <>
      <div className=" h-auto w-full">
        <HeroSection />
        <SupportedSection />
        <ProtocolFeatures />

        <GettingStartedSection />
        <StrategiesSection />
      </div>
    </>
  );
}
