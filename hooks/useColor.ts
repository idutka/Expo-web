import { useCallback, useState } from "react";

const COLOR_START = 0;
const COLOR_MEDIAN = 128;
const COLOR_END = 255;

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getDarkColor = () => {
  const r = getRandomInt(COLOR_START, COLOR_MEDIAN);
  const g = getRandomInt(COLOR_START, COLOR_MEDIAN);
  const b = getRandomInt(COLOR_START, COLOR_MEDIAN);
  return `rgb(${r}, ${g}, ${b})`;
};

const getLightColor = () => {
  const r = getRandomInt(COLOR_MEDIAN, COLOR_END);
  const g = getRandomInt(COLOR_MEDIAN, COLOR_END);
  const b = getRandomInt(COLOR_MEDIAN, COLOR_END);
  return `rgb(${r}, ${g}, ${b})`;
};

export function useColor() {
  const [lightColor, setLightColor] = useState(getLightColor);
  const [darkColor, setDarkColor] = useState(getDarkColor);

  const getNewColor = useCallback(() => {
    setLightColor(getLightColor());
    setDarkColor(getDarkColor());
  }, []);

  return { lightColor, darkColor, getNewColor };
}
