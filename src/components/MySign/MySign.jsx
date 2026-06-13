import Link from "next/link";

import styles from "./MySign.module.scss";

export const MySign = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Link
          href={"https://www.linkedin.com/in/michalkolban/"}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.sign}
        >
          designed by <span>Kołban.</span>
        </Link>
      </div>
    </div>
  );
};
