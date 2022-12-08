export const getRandomCharacters = () => (Math.random() + 1).toString(36).substring(7);

export const convertMinutesToHour = (minutesValue: number) =>
    minutesValue > 60 ? `${(minutesValue / 60).toFixed(2)}h` : `${minutesValue}m`;
