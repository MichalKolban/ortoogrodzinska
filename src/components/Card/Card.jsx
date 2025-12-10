import Image from "next/image";
import styles from "./Card.module.scss";

export const Card = ({
  img,
  alt,
  width,
  height,
  companyName,
  companyAdress,
  hrefLink,
}) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={img}
        alt={alt}
        width={width} // docelowa szerokość obrazu
        height={height} // docelowa wysokość obrazu
        className={styles.image}
        // sizes="(max-width: 768px) 80vw, 50vw"
        // style={{ width: "100%", height: "auto" }}
      />
      <div className={styles.companyName}>{companyName}</div>
      <div className={styles.companyAdress}>{companyAdress}</div>

      <a className={styles.button} href={hrefLink} target="_blank">
        Przejdź do strony
      </a>
    </div>
  );
};
