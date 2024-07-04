export class MapOverwriter {

    public static overwriteMap(destination: Map<string, any>, source: Map<string, any>): void {
        source.forEach((value, key) => {
            destination.set(key, value);
        });
    }
}
