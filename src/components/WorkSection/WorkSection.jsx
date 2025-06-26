import Image from "next/image";
import styles from "./WorkSection.module.scss";

const nbdentalImg = "/nbdental.png";
const ortoparkImg = "/ortoprzyparku.png";

export const WorkSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBox}>
        <h3 className={styles.title}>Miejsca, w których</h3>
        <h3 className={styles.smallTitle}>dbam o Twój uśmiech</h3>
      </div>
      <div className={styles.companyBox}>
        <div className={styles.company}>
          <div className={styles.imageWrapper}>
            <Image
              src={nbdentalImg}
              width={155}
              height={40}
              alt={"NB Dental"}
            />
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.companyName}>NB Dental Clinic</div>
            <div className={styles.address}>ul. Juliusza Słowackiego 1A</div>
            <div className={styles.zipCode}>72-100 Goleniów</div>
          </div>
        </div>
        <div className={styles.company}>
          <div className={styles.imageWrapper}>
            <Image
              src={ortoparkImg}
              width={102}
              height={60}
              alt={"Ortodoncja przy Parku"}
            />
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.companyName}>Ortodoncja Przy Parku</div>
            <div className={styles.address}>ul. Jana Kazimierza 21/1u.</div>
            <div className={styles.zipCode}>71-620 Szczecin</div>
          </div>
        </div>
      </div>
    </div>
  );
};
