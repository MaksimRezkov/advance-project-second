import { classNames } from './classNames';

describe('classNames', () => {
  test('true value', () => {
    const arg = {
      mainClassName: 'testing_class',
      additional: ['additional_class'],
      mods: {
        hovered: true,
        disabled: false,
      },
    };
    const expected = 'testing_class additional_class hovered';
    expect(classNames(arg)).toBe(expected);
  });
});
