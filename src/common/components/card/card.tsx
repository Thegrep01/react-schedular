import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Box } from '@material-ui/core';
import './card.scss';

export function LessonCard() {
    return (
        <Card className='card'>
            <CardContent>
                <Box display='flex' flexDirection='row' justifyContent='space-between'>
                    <Typography className='title' color='textSecondary' gutterBottom>
                        13:00
                    </Typography>
                    <Typography className='title' color='textSecondary' gutterBottom>
                        6/52
                    </Typography>
                </Box>
                <Typography variant='h5' component='h2'>
                    Lorem ipsum dolor
                </Typography>
                <Typography color='textSecondary'>Lorem ipsum dolor</Typography>
            </CardContent>
        </Card>
    );
}
