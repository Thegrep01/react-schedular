import React from 'react';
import Day from 'src/common/components/day/day';
import { Box } from '@material-ui/core';

export default function Schedular() {
    return (
        <Box display='flex' justifyContent='space-evenly' flexWrap='wrap' width='100%'>
            <Day day='Monday' />
            <Day day='Tuesday' />
            <Day day='Wednesday' />
            <Day day='Thursday' />
            <Day day='Friday' />
            <Day day='Saturday' />
        </Box>
    );
}
