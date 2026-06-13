import Image from "next/image";
import styles from "./Footer.module.scss";
import Link from "next/link";

const iconInstagram = "/icons/instagram-logo.png";
const iconFacebook = "/icons/facebook-logo.png";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Social Media:</div>
      <div className={styles.socialBox}>
        {/* <Link
          href={
            "https://www.facebook.com/p/Karolina-Ogrodzi%C5%84ska-Dentysta-100063768894482/"
          }
          target="_blank"
        >
          <Image
            src={iconInstagram}
            width={25}
            height={25}
            alt="instagram icon"
          />
        </Link> */}
        <Link
          href={
            "https://www.facebook.com/p/Karolina-Ogrodzi%C5%84ska-Dentysta-100063768894482/"
          }
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook Karolina Ogrodzińska-Kołban"
        >
          <Image
            src={iconFacebook}
            width={25}
            height={25}
            alt="facebook icon"
          />
        </Link>
      </div>
    </div>
  );
};
