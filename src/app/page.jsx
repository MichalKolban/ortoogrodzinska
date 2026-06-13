import { HeroSection } from "@/components/HeroSection/HeroSection";
import styles from "./page.module.css";

import { Navigation } from "@/components/Navigation/Navigation";
import { MainSection } from "@/components/MainSection/MainSection";
import { WorkSection } from "@/components/WorkSection/WorkSection";
// import SplashScreen from "@/components/SplashScreen/splashScreen";
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import { MySign } from "@/components/MySign/MySign";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <SplashScreen />
        <header>
          <Navigation />
        </header>
        <main>
          <HeroSection />
          <MainSection />
          <WorkSection />
        </main>
      </div>
      <footer>
        <MySign />
      </footer>
    </>
  );
}
