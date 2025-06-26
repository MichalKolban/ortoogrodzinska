import { HeroSection } from "@/components/HeroSection/HeroSection";
import styles from "./page.module.css";

import { Navigation } from "@/components/Navigation/Navigation";
import { MainSection } from "@/components/MainSection/MainSection";
import { WorkSection } from "@/components/WorkSection/WorkSection";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <MainSection />
      <WorkSection />
      <Footer />
    </>
  );
}
