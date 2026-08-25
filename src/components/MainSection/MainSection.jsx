import Image from "next/image";
import * as motion from "motion/react-client";
import styles from "./MainSection.module.scss";

// const karoImg = "/karolinaOgrodzinskaKolban.png";

const photoSecondaryImg = "/photo1.jpg";
const photoMainImg = "/photo2.jpg";
const photoTertiaryImg = "/photo3.jpg";

export const MainSection = () => {
  return (
    <motion.section
      className={styles.wrapper}
      aria-label="O mnie"
      id="o-mnie"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
    >
      <div className={styles.photoSection}>
        <Image
          src={photoSecondaryImg}
          alt="Gabinet ortodontyczny w Szczecinie - leczenie ortodontyczne dorosłych"
          width={300}
          height={390}
          className={`${styles.image} ${styles.main}`}
        />
        <Image
          src={photoMainImg}
          alt="Ortodonta Karolina Ogrodzińska-Kołban podczas konsultacji"
          width={300}
          height={390}
          className={`${styles.image} ${styles.secondary}`}
        />
        <Image
          src={photoTertiaryImg}
          alt="Nowoczesne leczenie ortodontyczne - nakładki Invisalign Szczecin"
          width={300}
          height={390}
          className={`${styles.image} ${styles.tertiary}`}
        />
      </div>
      <div className={styles.textSection}>
        <h2 className={styles.heading}>Nowoczesna ortodoncja w Szczecinie i Goleniowie</h2>
        <p className={styles.articleSection}>
          Na co dzień zajmuję się nowoczesnym leczeniem ortodontycznym dzieci i
          dorosłych. Pacjentów przyjmuję w gabinetach w Szczecinie i Goleniowie,
          oferując zarówno tradycyjne aparaty stałe i ruchome, jak i
          przezroczyste nakładki Invisalign.
        </p>
        <p className={styles.articleSection}>
          W pracy stawiam na skuteczność, estetykę oraz komfort pacjenta. Każde
          leczenie dobieram indywidualnie, korzystając z nowoczesnych
          technologii, które pozwalają osiągać trwałe i naturalne efekty.
        </p>
        <p className={styles.articleSection}>
          Podczas wizyt dbam o przyjazną atmosferę, jasną komunikację i poczucie
          bezpieczeństwa. Chętnie odpowiadam na wszystkie pytania, aby pacjent
          na każdym etapie leczenia czuł się w pełni zaopiekowany i dobrze
          poinformowany.
        </p>
        <p className={styles.doctorName}>
          lek. dent. Karolina Ogrodzińska-Kołban
        </p>
      </div>
    </motion.section>
  );
};
