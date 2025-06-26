import Image from "next/image";
import styles from "./MainSection.module.scss";

const karoImg = "/karolinaOgrodzinskaKolban.png";

export const MainSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.descriptionBox}>
        <h1 className={styles.title}>Karolina Ogrodzińska-Kołban</h1>
        <article className={styles.description}>
          <p className={styles.paragraph}>
            Ze stomatologią związana jestem od dziecka dzięki rodzinnym
            tradycjom. Absolwentka Pomorskiego Uniwersytetu Medycznego, którą
            ukończyłam w 2015 roku. Od tamtej pory nieprzerwanie rozwijam swoją
            karierę zawodową, zdobywając cenne doświadczenie i stale podnosząc
            kwalifikacje. Stomatologia to dla mnie nie tylko zawód, lecz przede
            wszystkim pasja, którą realizuje z pełnym zaangażowaniem.
          </p>
          <p className={styles.paragraph}>
            Specjalizuje się w nowoczesnej ortodoncji, oferując kompleksowe
            leczenie ortodontyczne zarówno dzieciom, jak i dorosłym. W
            codziennej pracy stosuje zarówno tradycyjne aparaty ruchome i stałe,
            jak i innowacyjne rozwiązania, takie jak przezroczyste nakładki,
            które łączą wysoką skuteczność leczenia z maksymalnym komfortem i
            estetyką. Każda wizyta jest okazją do zbudowania relacji opartej na
            zaufaniu i poczuciu bezpieczeństwa. Dbam o to, aby pacjent czuł się
            komfortowo, zaopiekowany i w pełni zaznajomiony z procesem leczenia.{" "}
          </p>
          <p className={styles.paragraph}>
            Zawsze chętnie odpowiada na wszelkie pytania — zarówno te proste,
            jak i bardziej wymagające — zapewniając jasną i zrozumiałą
            komunikację na każdym etapie leczenia.
          </p>
        </article>
      </div>
      <div className={styles.imageBox}>
        <Image
          src={karoImg}
          // width={540}
          // height={620}
          fill
          className={styles.image}
          alt="Karolina Ogrodzińska-Kołban"
        />
      </div>
    </div>
  );
};
