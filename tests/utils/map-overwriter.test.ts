import { MapOverwriter } from '../../src/utils/map-overwriter';

test('MapOverwriter.overwriteMap', () => {
    const destination = new Map<string, any>([['key1', 'value1'], ['key2', 'value2']]);
    const source = new Map<string, any>([['key2', 'newValue2'], ['key3', 'value3']]);
    
    MapOverwriter.overwriteMap(destination, source);

    expect(destination.get('key1')).toBe('value1');
    expect(destination.get('key2')).toBe('newValue2');
    expect(destination.get('key3')).toBe('value3');
});
