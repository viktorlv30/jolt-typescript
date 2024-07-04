import { StringTools } from '../../src/utils/string-tools';

test('StringTools.countMatches', () => {
    expect(StringTools.countMatches('ababa', 'aba')).toBe(1);
    expect(StringTools.countMatches('ababa', 'ba')).toBe(2);
    expect(StringTools.countMatches(null, 'a')).toBe(0);
    expect(StringTools.countMatches('a', null)).toBe(0);
    expect(StringTools.countMatches('a', 'ab')).toBe(0);
});

test('StringTools.isNotBlank', () => {
    expect(StringTools.isNotBlank('hello')).toBe(true);
    expect(StringTools.isNotBlank('')).toBe(false);
    expect(StringTools.isNotBlank('   ')).toBe(false);
    expect(StringTools.isNotBlank(null)).toBe(false);
});

test('StringTools.isBlank', () => {
    expect(StringTools.isBlank('hello')).toBe(false);
    expect(StringTools.isBlank('')).toBe true);
    expect(StringTools.isBlank('   ')).toBe true);
    expect(StringTools.isBlank(null)).toBe true);
});

test('StringTools.isEmpty', () => {
    expect(StringTools.isEmpty('hello')).toBe false);
    expect(StringTools.isEmpty('')).toBe true);
    expect(StringTools.isEmpty(null)).toBe true);
});
