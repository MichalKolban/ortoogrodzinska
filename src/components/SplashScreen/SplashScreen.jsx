"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import styles from "./SplashScreen.module.scss";
import {
  SPLASH_TEXT,
  SPLASH_LETTER_DELAY,
  SPLASH_LETTER_DURATION,
  SPLASH_TEXT_DURATION,
  SPLASH_EXIT_DURATION,
} from "@/lib/splashTiming";

export default function SplashScreen() {
  const [startExit, setStartExit] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // renderujemy litery dopiero na kliencie
  const [hideSplash, setHideSplash] = useState(false); // odmontowanie po zakończeniu animacji

  useEffect(() => {
    setIsMounted(true);

    const timer = setTimeout(() => {
      setStartExit(true);
    }, SPLASH_TEXT_DURATION * 1000); // zamiana na ms

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted || hideSplash) return null; // nic nie renderujemy na serwerze / po zakończeniu animacji

  return (
    <motion.div
      className={styles.splash}
      style={{ zIndex: 9999 }}
      animate={
        startExit ? { y: "-100%", opacity: [1, 1, 0] } : { y: 0, opacity: 1 }
      }
      transition={{
        duration: SPLASH_EXIT_DURATION,
        ease: [0.65, 0, 0.35, 1],
        opacity: {
          duration: SPLASH_EXIT_DURATION,
          times: [0, 0.65, 1],
          ease: "easeIn",
        },
      }}
      onAnimationComplete={() => {
        if (startExit) setHideSplash(true);
      }}
    >
      <div className={styles.title}>
        {SPLASH_TEXT.split("").map((letter, index) => {
          const char = letter === " " ? " " : letter;

          return (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: SPLASH_LETTER_DURATION,
                delay: index * SPLASH_LETTER_DELAY,
                ease: "easeOut",
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
}
