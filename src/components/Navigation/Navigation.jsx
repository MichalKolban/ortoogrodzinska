import Image from "next/image";

// const iconInstagram = "/icons/instagram-logo.png";
// const iconFacebook = "/icons/facebook-logo.png";

const iconInstagram = "/icons/icon_instagram.svg";
const iconFacebook = "/icons/icon_fb.svg";

import styles from "./Navigation.module.scss";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.inner}>
        <h1 className={styles.logo}>OrtoOgrodzińska</h1>
        <div className={styles.socialBox}>
          <p className={styles.socialSign}>Social Media</p>
          <Link
            className={styles.socialSignIcon}
            href={
              "https://www.facebook.com/p/Karolina-Ogrodzi%C5%84ska-Dentysta-100063768894482/"
            }
            target="_blank"
          >
            <Image
              src={iconInstagram}
              width={24}
              height={24}
              alt="instagram icon"
            />
          </Link>
          <Link
            className={styles.socialSignIcon}
            href={
              "https://www.facebook.com/p/Karolina-Ogrodzi%C5%84ska-Dentysta-100063768894482/"
            }
            target="_blank"
          >
            <Image
              src={iconFacebook}
              width={24}
              height={24}
              alt="facebook icon"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};
