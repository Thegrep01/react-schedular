import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Clock from 'src/common/components/clock/clock';

export default function Header() {
    return (
        <AppBar>
            <Toolbar>
                <Clock />
            </Toolbar>
        </AppBar>
    );
}
