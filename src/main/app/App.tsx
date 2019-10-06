import React from 'react';

import './App.scss';
import Header from '../header/header';
import Schedular from '../schedular/schedular';

const App: React.FC = () => {
    return (
        <div className='app'>
            <Header />
            <div className='main'>
                <Schedular />
            </div>
        </div>
    );
};

export default App;
