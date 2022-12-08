export const parseDurationToMinutes = (duration: string) => {
    const numericExtract = /(\d+(?:\.\d+)?)/g;
    const extractMatch = duration.match(numericExtract);
    if (extractMatch) {
        const rawNumericDuration = Number(extractMatch[0]);
        if (duration.includes('m')) {
            return rawNumericDuration;
        }

        return Math.round(rawNumericDuration * 60);
    }

    return 0;
};
