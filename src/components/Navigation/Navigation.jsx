import Image from "next/image";

const iconInstagram = "/icons/instagram-logo.png";
const iconFacebook = "/icons/facebook-logo.png";

import styles from "./Navigation.module.scss";
import Link from "next/link";

export const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.logo}>OrtoOgrodzińska</h1>
      <div className={styles.socialBox}>
        <Link
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
        </Link>
        <Link
          href={
            "https://www.facebook.com/p/Karolina-Ogrodzi%C5%84ska-Dentysta-100063768894482/"
          }
          target="_blank"
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
