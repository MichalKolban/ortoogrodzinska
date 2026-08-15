import styles from "./HeroSection.module.scss";

import Image from "next/image";
import * as motion from "motion/react-client";
import { SPLASH_TOTAL_DURATION } from "@/lib/splashTiming";

const karoImg = "/karo.jpg";

export const HeroSection = () => {
  return (
    <motion.section
      className={styles.wrapper}
      aria-label="Sekcja główna"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: SPLASH_TOTAL_DURATION,
      }}
    >
      <div className={styles.titleSection}>
        <h1 className={styles.title}>
          Nowoczesna ortodoncja.
          <span className={styles.titleGray}> Uśmiechnij się pięknie.</span>
        </h1>

        <div className={styles.lineGray}></div>
        <p className={styles.doctorName}>
          lek. dent. Karolina {"\n"} Ogrodzińska-Kołban
        </p>
      </div>
      <div className={styles.photoSection}>
        <Image
          src={karoImg}
          alt="Ortodonta Karolina Ogrodzińska-Kołban — specjalista ortodoncji w Szczecinie i Goleniowie"
          width={500}
          height={750}
          className={styles.image}
          sizes="(max-width: 768px) 80vw, 50vw"
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>
    </motion.section>
  );
};
