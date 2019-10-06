import React from 'react';
import renderer from 'react-test-renderer';
import Day from './day';

describe('render day', () => {
    it('render day', () => {
        const clock = renderer.create(<Day day='Monday'></Day>).toJSON();
        expect(clock).toMatchSnapshot();
    });
});
