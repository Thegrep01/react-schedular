import React from 'react';
import renderer from 'react-test-renderer';
import Day from './day';

describe('render day', () => {
    it('should render empty message', () => {
        const day = renderer.create(<Day day='Monday' lessons={[]}></Day>).toJSON();
        expect(day).toMatchSnapshot();
    });

    it('should render day with lesseons', () => {
        const day = renderer.create(<Day day='Monday' lessons={[
            {
                name: 'Lorem Ipsum dolor 3',
                teacher: 'Lorem',
                type: 0,
                classRoom: '6/52',
                index: 1
            }
        ]}></Day>).toJSON();
        expect(day).toMatchSnapshot();
    });
});
