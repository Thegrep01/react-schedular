export interface ILessons {
    name: string;
    dayIndex: number;
    teacher: string;
    type: LessonType;
    pclassRoom: string;
    index: number;
}


export enum LessonType {
    lecture,
    practice,
}