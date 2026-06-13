import styles from "./WorkSection.module.scss";
import { Card } from "../Card/Card";

const nbdentalImg = "/nbdental.png";
const ortoparkImg = "/ortoprzyparku.png";

export const WorkSection = () => {
  return (
    <section className={styles.wrapper} aria-label="Gabinety" id="gabinety">
      <div className={styles.sectionHeder}>
        <h2 className={styles.sectionHeading}>
          Miejsca w których
          <span className={styles.sectionGray}> dbam o Twój uśmiech</span>
        </h2>
        <div className={styles.lineGray}></div>
      </div>
      <div className={styles.sectionCard}>
        <Card
          img={nbdentalImg}
          alt={"Logo NB Dental Clinic — stomatolog i ortodonta Goleniów"}
          width={163}
          height={42}
          companyName={"NB Dental Clinic"}
          companyAdress={"ul. Juliusza Słowackiego 1A, 72-100 Goleniów"}
          hrefLink={"https://nbdental.pl/"}
        />
        <Card
          img={ortoparkImg}
          alt={"Logo Ortodoncja przy Parku — ortodonta Szczecin"}
          width={107}
          height={63}
          companyName={"Ortodoncja przy Parku"}
          companyAdress={"ul. Jana Kazimierza 21/1u, 71-620 Szczecin"}
          hrefLink={"https://ortodoncjaprzyparku.pl"}
        />
      </div>
    </section>
  );
};
