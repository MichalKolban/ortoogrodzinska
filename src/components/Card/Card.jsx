"use client";

import Image from "next/image";
import { motion } from "motion/react";
import styles from "./Card.module.scss";

export const Card = ({
  img,
  alt,
  width,
  height,
  companyName,
  companyAdress,
  hrefLink,
  index = 0,
}) => {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2 + index * 0.15,
        },
      }}
      viewport={{ once: true, amount: 0.35 }}
      whileHover={{
        scale: 1.02,
        y: -6,
        boxShadow: "0px 16px 40px rgba(0,0,0,0.15)",
      }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={img}
          alt={alt}
          width={width}
          height={height}
          className={styles.image}
        />
      </div>
      <div className={styles.companyName}>{companyName}</div>
      <div className={styles.companyAdress}>{companyAdress}</div>

      <motion.a
        className={styles.button}
        href={hrefLink}
        target="_blank"
        // wartość musi być zsynchronizowana z --color-button-bg-hover w globals.css
        whileHover={{ backgroundColor: "#1a181a" }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Przejdź do strony
      </motion.a>
    </motion.div>
  );
};
