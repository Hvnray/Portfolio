const randomNumberBetween = (min: number, max: number) => {
  // Returns random number between min and max
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const clearTimer = (timer: number) => {
  //clear timer
  clearTimeout(timer);
};
export default function() {
  return { randomNumberBetween, clearTimer };
}
