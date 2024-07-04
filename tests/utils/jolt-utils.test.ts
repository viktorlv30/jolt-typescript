import { JoltUtils } from '../../src/utils/jolt-utils';

test('JoltUtils.isEmpty', () => {
    expect(JoltUtils.isEmpty(null)).toBe(true);
    expect(JoltUtils.isEmpty(undefined)).toBe(true);
    expect(JoltUtils.isEmpty('')).toBe(true);
    expect(JoltUtils.isEmpty('hello')).toBe(false);
    expect(JoltUtils.isEmpty([])).toBe(true);
    expect(JoltUtils.isEmpty([1, 2, 3])).toBe(false);
    expect(JoltUtils.isEmpty(new Map())).toBe(true);
    expect(JoltUtils.isEmpty(new Set())).toBe(true);
    expect(JoltUtils.isEmpty({})).toBe(true);
    expect(JoltUtils.isEmpty({ key: 'value' })).toBe(false);
});

test('JoltUtils.isNotEmpty', () => {
    expect(JoltUtils.isNotEmpty(null)).toBe(false);
    expect(JoltUtils.isNotEmpty(undefined)).toBe(false);
    expect(JoltUtils.isNotEmpty('')).toBe(false);
    expect(JoltUtils.isNotEmpty('hello')).toBe(true);
    expect(JoltUtils.isNotEmpty([])).toBe(false);
    expect(JoltUtils.isNotEmpty([1, 2, 3])).toBe(true);
    expect(JoltUtils.isNotEmpty(new Map())).toBe(false);
    expect(JoltUtils.isNotEmpty(new Set())).toBe(false);
    expect(JoltUtils.isNotEmpty({})).toBe(false);
    expect(JoltUtils.isNotEmpty({ key: 'value' })).toBe(true);
});

