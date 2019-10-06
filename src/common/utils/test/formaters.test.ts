import { formatDay, formatTime } from 'src/common/utils/formatters';

describe('Time formatter tests', () => {
    it('should return 11', () => {
        expect(formatTime('11')).toBe('11');
    });

    it('should return 01', () => {
        expect(formatTime('1')).toBe('01');
    });
});

describe('Day tests', () => {
    it('should return Mon', () => {
        const mockDate = new Date(1466424490000);
        // tslint:disable-next-line: no-any
        const spy = jest.spyOn(global, 'Date').mockImplementation(() => mockDate as any);
        expect(formatDay(new Date().getDay())).toBe('Mon');
        spy.mockRestore();
    });
});
