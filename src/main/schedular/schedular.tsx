import React from 'react';
import Day from 'src/common/components/day/day';
import { Box, CircularProgress } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { ALL_DAYS } from 'src/grahql';
import { IDay } from 'src/common/types/day.type';

export default function Schedular() {

    const { loading, data } = useQuery(ALL_DAYS);

    return (
        <>
            {loading ?
                <CircularProgress />
                : <Box display='flex' justifyContent='space-evenly' flexWrap='wrap' width='100%'>
                    {data.days.map(renderDay)}
                </Box>
            }
        </>
    );
}

function renderDay(day: IDay, index: number) {
    return <Day key={index} day={day.name} lessons={day.lessons} />;
}