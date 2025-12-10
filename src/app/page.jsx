import { HeroSection } from "@/components/HeroSection/HeroSection";
import styles from "./page.module.css";

import { Navigation } from "@/components/Navigation/Navigation";
import { MainSection } from "@/components/MainSection/MainSection";
import { WorkSection } from "@/components/WorkSection/WorkSection";
// import SplashScreen from "@/components/SplashScreen/splashScreen";
import SplashScreen from "@/components/SplashScreen/SplashScreen";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Navigation />
      <HeroSection />
      <MainSection />
      <WorkSection />
    </>
  );
}
