import React from 'react';
import { LessonCard } from '../card/card';
import { Box, List, ListItem, Typography } from '@material-ui/core';
import './day.scss';
interface IProps {
    day: string;
}

export default function Day(props: IProps) {
    const { day } = props;

    return (
        <Box display='flex' alignItems='center' flexDirection='column'>
            <Typography variant='h4'>{day}</Typography>
            <List className='list'>
                <ListItem>
                    <LessonCard />
                </ListItem>
                <ListItem>
                    <LessonCard />
                </ListItem>
                <ListItem>
                    <LessonCard />
                </ListItem>
                <ListItem>
                    <LessonCard />
                </ListItem>
                <ListItem>
                    <LessonCard />
                </ListItem>
                <ListItem>
                    <LessonCard />
                </ListItem>
                <ListItem>
                    <LessonCard />
                </ListItem>
                <ListItem>
                    <LessonCard />
                </ListItem>
            </List>
        </Box>
    );
}
