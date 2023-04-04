import { useEffect, useState } from 'react';
const useCountdown = (targetDate: any) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState<any>(countDownDate - new Date().getTime());

  useEffect(() => {
    setCountDown(new Date(targetDate).getTime() - new Date().getTime());
  }, [targetDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    if (countDown <= 0) clearInterval(interval);

    return () => clearInterval(interval);
  }, [countDownDate, countDown]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: any) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
