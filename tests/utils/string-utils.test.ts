import { StringUtils } from '../../src/utils/string-utils';

test('StringUtils.isEmpty', () => {
    expect(StringUtils.isEmpty(null)).toBe(true);
    expect(StringUtils.isEmpty(undefined)).toBe(true);
    expect(StringUtils.isEmpty("")).toBe(true);
    expect(StringUtils.isEmpty("hello")).toBe(false);
});

test('StringUtils.isNotEmpty', () => {
    expect(StringUtils.isNotEmpty(null)).toBe(false);
    expect(StringUtils.isNotEmpty(undefined)).toBe(false);
    expect(StringUtils.isNotEmpty("")).toBe(false);
    expect(StringUtils.isNotEmpty("hello")).toBe(true);
});

