import styles from "./WorkSection.module.scss";
import { Card } from "../Card/Card";

const nbdentalImg = "/nbdental.png";
const ortoparkImg = "/ortoprzyparku.png";

export const WorkSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionHeder}>
        <div className={styles.sectionHeading}>Miejsca w których</div>
        <div className={`${styles.sectionHeading} ${styles.sectionGray}`}>
          dbam o Twój uśmiech
        </div>
        <div className={styles.lineGray}></div>
      </div>
      <div className={styles.sectionCard}>
        <Card
          img={nbdentalImg}
          alt={"nb dental"}
          width={163}
          height={42}
          companyName={"NB Dental Clinic"}
          companyAdress={"ul. Juliusza Słowackiego 1A 72-100 Goleniów"}
          hrefLink={"https://nbdental.pl/"}
        />
        <Card
          img={ortoparkImg}
          alt={"ortodoncja przy parku"}
          width={107}
          height={63}
          companyName={"Ortodoncja przy Parku"}
          companyAdress={"ul. Jana Kazimierza 21/1u. 71-620 Szczecin"}
          hrefLink={"https://ortodoncjaprzyparku.pl"}
        />
      </div>
    </div>
  );
};
