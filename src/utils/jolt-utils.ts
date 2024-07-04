export class JoltUtils {
    public static isEmpty(object: any): boolean {
        if (object === null || object === undefined) {
            return true;
        }
        if (typeof object === 'string') {
            return object.length === 0;
        }
        if (Array.isArray(object)) {
            return object.length === 0;
        }
        if (object instanceof Map || object instanceof Set) {
            return object.size === 0;
        }
        if (typeof object === 'object') {
            return Object.keys(object).length === 0;
        }
        return false;
    }

    public static isNotEmpty(object: any): boolean {
        return !JoltUtils.isEmpty(object);
    }
}
