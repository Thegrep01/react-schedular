import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Box } from '@material-ui/core';
import './card.scss';
import { ILessons } from 'src/common/types/lessons.types';
import { getLessonTime } from 'src/common/utils/formatters';

interface IProps {
    lesson: ILessons;
}

export function LessonCard(props: IProps) {

    const { lesson } = props;
    const lectureColor: string = '#00e676';
    const practiceColor: string = '#03a9f4';
    console.log(lesson.type);
    return (
        <Card className='card' style={{ backgroundColor: lesson.type ? lectureColor : practiceColor }}>
            <CardContent>
                <Box display='flex' flexDirection='row' justifyContent='space-between'>
                    <Typography className='title' color='textSecondary' gutterBottom>
                        {getLessonTime(lesson.index)}
                    </Typography>
                    <Typography className='title' color='textSecondary' gutterBottom>
                        {lesson.classRoom}
                    </Typography>
                </Box>
                <Typography variant='h5' component='h2'>
                    {lesson.name}
                </Typography>
                <Typography color='textSecondary'>
                    {lesson.teacher}
                </Typography>
            </CardContent>
        </Card>
    );
}
