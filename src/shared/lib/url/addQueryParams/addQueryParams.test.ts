import { getQueryParams, addQueryParams } from "./addQueryParams";

describe('getQueryParams', () => {
    test('returns empty string when no params are provided', () => {
        expect(getQueryParams({})).toBe('?');
    });

    test('returns correct query string with one param', () => {
        const params = { name: 'John' };
        expect(getQueryParams(params)).toBe('?name=John');
    });

    test('returns correct query string with multiple params', () => {
        const params = { name: 'John', age: '30' };
        expect(getQueryParams(params)).toBe('?name=John&age=30');
    });

    test('ignores undefined values', () => {
        const params = { name: 'John', age: undefined };
        expect(getQueryParams(params)).toBe('?name=John');
    });
});

describe('addQueryParams', () => {
    let pushStateSpy: jest.SpyInstance;

    beforeAll(() => {
        // mock window.history.pushState
        pushStateSpy = jest.spyOn(window.history, 'pushState').mockImplementation(() => { });
    });

    afterAll(() => {
        // restore window.history.pushState
        pushStateSpy.mockRestore();
    });

    test('calls window.history.pushState with correct params', () => {
        const params = { name: 'John', age: '30' };
        addQueryParams(params);
        expect(pushStateSpy).toHaveBeenCalledWith(null, '', '?name=John&age=30');
    });
});
