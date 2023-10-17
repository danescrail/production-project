import { classNames } from "shared/lib/classNames/classNames";

describe('classNames', () => {
    test('with only 1 param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with addititonal class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });
    test('with mods', () => {
        const expected = 'someClass class1 hovered';
        expect(classNames('someClass', { hovered: true, selected: false }, ['class1'])).toBe(expected);
    });

    test('with mods = false', () => {
        const expected = 'someClass class1';
        expect(classNames('someClass', { hovered: false, selected: false }, ['class1'])).toBe(expected);
    });
});