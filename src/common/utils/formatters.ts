export function formatTime(value: string): string {
    if (value.length === 1) {
        return `0${value}`;
    }
    return value;
}

export function formatDay(dayNum: number): string {
    const Days = {
        1: 'Mon',
        2: 'Tue',
        3: 'Wen',
        4: 'Thu',
        5: 'Fri',
        6: 'Sat',
        0: 'Sun',
    };
    return Days[dayNum];
}
