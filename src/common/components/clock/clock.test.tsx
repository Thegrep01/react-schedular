import React from 'react';
import renderer from 'react-test-renderer';
import Clock from './clock';

let realDate;

describe('Test clock component', () => {
    it('show valid time', () => {
        const currentDate = new Date('2019-05-14T11:01:58.135Z');
        realDate = Date;
        // @ts-ignore
        global.Date = class extends Date {
            public constructor(date) {
                if (date) {
                    super(date);
                }
                return currentDate;
            }
        };
        const clock = renderer.create(<Clock></Clock>).toJSON();
        expect(clock).toMatchSnapshot();
        global.Date = realDate;
    });
});
// 2016-06-20T12:08:10.000Z
