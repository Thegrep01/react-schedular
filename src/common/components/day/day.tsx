import React from 'react';
import { LessonCard } from '../card/card';
import { Box, List, ListItem, Typography } from '@material-ui/core';
import './day.scss';
import { ILessons } from 'src/common/types/lessons.types';
interface IProps {
    day: string;
    lessons: ILessons[];
}

export default function Day(props: IProps) {
    const { day, lessons } = props;

    return (
        <Box display='flex' alignItems='center' flexDirection='column'>
            <Typography variant='h4'>{day}</Typography>
            <List className='list'>
                {!lessons.length ? <Typography>You can have a rest today!</Typography> : lessons.map(renderLesson)}
            </List>
        </Box>
    );
}

function renderLesson(lesson: ILessons, index: number) {
    return (
        <ListItem key={index}>
            <LessonCard lesson={lesson} />
        </ListItem>
    );
}