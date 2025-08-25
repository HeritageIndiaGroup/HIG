import { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Set up a timer that updates the time every second
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    // Clean up the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  // Format the date and time for the Indian timezone
  const formattedDateTime = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(currentTime);

  return <div>{formattedDateTime}</div>;
};

export default Clock;