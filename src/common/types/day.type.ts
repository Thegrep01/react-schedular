import { ILessons } from './lessons.types';

export interface IDay {
    name: string;
    lessons: ILessons[];
}