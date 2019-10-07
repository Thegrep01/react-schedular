export interface ILessons {
    name: string;
    dayIndex?: number;
    teacher: string;
    type: LessonType;
    classRoom: string;
    index: number;
}


export enum LessonType {
    lecture,
    practice,
}