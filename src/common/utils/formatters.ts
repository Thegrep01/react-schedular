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

export function getLessonTime(index: number) {
    const LessonsTime = {
        1: '8:30 - 9:50',
        2: '10:10 - 11:30',
        3: '12:00 - 13:20',
        4: '13:40 - 15:00',
    };

    return LessonsTime[index];
}