import styles from "./HeroSection.module.scss";

import Image from "next/image";

const karoImg = "/karo.jpg";

export const HeroSection = () => {
  return (
    <section className={styles.wrapper} aria-label="Sekcja główna">
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
    </section>
  );
};
