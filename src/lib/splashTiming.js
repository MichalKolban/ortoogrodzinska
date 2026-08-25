// Wspólne stałe czasowe splash screena - używane zarówno przez sam
// SplashScreen (do wyliczenia, kiedy zacząć animację wyjścia), jak i przez
// HeroSection (żeby jego animacja wejścia odpaliła się dopiero, gdy splash
// naprawdę zniknie, a nie w tle, niewidocznie, podczas gdy splash go zasłania).

export const SPLASH_TEXT = "Uśmiech, który zmienia wszystko.";

export const SPLASH_LETTER_DELAY = 0.07; // tempo pisania litera po literze
export const SPLASH_LETTER_DURATION = 0.22; // fade-in pojedynczej litery
export const SPLASH_PAUSE_AFTER = 0.25; // pauza po dopisaniu tekstu
export const SPLASH_EXIT_DURATION = 1.1; // czas animacji zjazdu splasha w górę

export const SPLASH_TEXT_DURATION =
  SPLASH_TEXT.length * SPLASH_LETTER_DELAY +
  SPLASH_LETTER_DURATION +
  SPLASH_PAUSE_AFTER;

// Całkowity czas, po którym splash jest już całkowicie niewidoczny.
export const SPLASH_TOTAL_DURATION = SPLASH_TEXT_DURATION + SPLASH_EXIT_DURATION;
