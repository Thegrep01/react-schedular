import React from 'react';
import Clock from './clock';
import ReactDOM from 'react-dom';


describe('Test clock component', () => {
    it('show valid time', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Clock />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

