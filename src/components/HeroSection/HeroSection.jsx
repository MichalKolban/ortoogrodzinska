import styles from "./HeroSection.module.scss";

import Image from "next/image";

const karoImg = "/karo.jpg";

export const HeroSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleSection}>
        <h2 className={styles.title}>Nowoczesna ortodoncja.</h2>
        <h2 className={`${styles.title} ${styles.titleGray}`}>
          Uśmiechnij się pięknie.
        </h2>

        <div className={styles.lineGray}></div>
        <h1 className={styles.doctorName}>
          lek. dent. Karolina {"\n"} Ogrodzińska-Kołban
        </h1>
      </div>
      {/* <div className={styles.photoSection}>
        <Image
          src={karoImg}
          fill
          className={styles.image}
          alt="Karolina Ogrodzińska-Kołban"
        />
      </div> */}
      <div className={styles.photoSection}>
        <Image
          src={karoImg}
          alt="Karolina Ogrodzińska-Kołban"
          width={500} // docelowa szerokość obrazu
          height={750} // docelowa wysokość obrazu
          className={styles.image}
          sizes="(max-width: 768px) 80vw, 50vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};
