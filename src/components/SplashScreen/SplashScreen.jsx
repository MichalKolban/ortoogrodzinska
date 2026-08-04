"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import styles from "./SplashScreen.module.scss";

export default function SplashScreen() {
  const [startExit, setStartExit] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // <--- nowy state
  const [hideSplash, setHideSplash] = useState(false); // <--- odmontowanie po zakończeniu animacji

  const text = "Uśmiech, który zmienia wszystko.";

  // Parametry animacji liter
  const letterDelay = 0.07; // szybkie tempo pisania
  const letterDuration = 0.22; // delikatny, miękki fade-in
  const pauseAfter = 0.25;

  useEffect(() => {
    setIsMounted(true); // renderujemy litery dopiero na kliencie

    const totalTextTime =
      text.length * letterDelay + letterDuration + pauseAfter;

    const timer = setTimeout(() => {
      setStartExit(true);
    }, totalTextTime * 1000); // zamiana na ms

    return () => clearTimeout(timer);
  }, [text]);

  if (!isMounted || hideSplash) return null; // <--- nic nie renderujemy na serwerze / po zakończeniu animacji

  return (
    // <motion.div
    //   className={styles.splash}
    //   animate={startExit ? { y: "-100%" } : { y: 0 }}
    //   transition={{ duration: 1.4, ease: [0.33, 1, 0.68, 1] }}
    // >

    //calkiem ok wersja 1
    <motion.div
      className={styles.splash}
      style={{ zIndex: 9999 }}
      animate={
        startExit ? { y: "-100%", opacity: [1, 1, 0] } : { y: 0, opacity: 1 }
      }
      transition={{
        duration: 1.1,
        ease: [0.65, 0, 0.35, 1],
        opacity: { duration: 1.1, times: [0, 0.65, 1], ease: "easeIn" },
      }}
      onAnimationComplete={() => {
        if (startExit) setHideSplash(true);
      }}
    >
      {/* //wersja druga
    // <motion.div
    //   className={styles.splash}
    //   initial={{ opacity: 1, zIndex: 9999 }}
    //   animate={startExit ? { opacity: 0 } : { opacity: 1 }}
    //   transition={{
    //     duration: 1.6,
    //     ease: "easeInOut",
    //   }}
    //   onAnimationComplete={() => {
    //     if (startExit) {
    //       // po zakończeniu animacji → zIndex -10
    //       document.querySelector(`.${styles.splash}`).style.zIndex = -10;
    //     }
    //   }}
    //   style={{
    //     backdropFilter: startExit ? "blur(0px)" : "blur(6px)",
    //   }}
    // > */}

      <div className={styles.title}>
        {text.split("").map((letter, index) => {
          const char = letter === " " ? "\u00A0" : letter;

          return (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: letterDuration,
                delay: index * letterDelay,
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
