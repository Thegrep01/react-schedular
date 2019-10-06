import React, { useEffect, useState } from 'react';
import { formatDay, formatTime } from 'src/common/utils/formatters';
import { Typography } from '@material-ui/core';

export default function Clock() {
    const [time, setTime] = useState(getTime());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(getTime());
        }, 1000);
        return () => clearInterval(intervalId);
    }, [time]);

    return <Typography>{time}</Typography>;
}

function getTime(): string {
    const date: Date = new Date();
    const day: string = formatDay(date.getDay());
    return `${day} ${formatTime(date.getHours().toString())}:${formatTime(date.getMinutes().toString())}`;
}
