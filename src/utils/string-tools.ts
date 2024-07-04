export class StringTools {
    public static countMatches(sourceSequence: string | null, subSequence: string | null): number {
        if (this.isEmpty(sourceSequence) || this.isEmpty(subSequence) || sourceSequence!.length < subSequence!.length) {
            return 0;
        }

        let count = 0;
        let sourceSequenceIndex = 0;
        let subSequenceIndex = 0;

        while (sourceSequenceIndex < sourceSequence!.length) {
            if (sourceSequence![sourceSequenceIndex] === subSequence![subSequenceIndex]) {
                sourceSequenceIndex++;
                subSequenceIndex++;
                while (sourceSequenceIndex < sourceSequence!.length && subSequenceIndex < subSequence!.length) {
                    if (sourceSequence![sourceSequenceIndex] !== subSequence![subSequenceIndex]) {
                        break;
                    }
                    sourceSequenceIndex++;
                    subSequenceIndex++;
                }
                if (subSequenceIndex === subSequence!.length) {
                    count++;
                }
                subSequenceIndex = 0;
                continue;
            }
            sourceSequenceIndex++;
        }

        return count;
    }

    public static isNotBlank(sourceSequence: string | null): boolean {
        return !this.isBlank(sourceSequence);
    }

    public static isBlank(sourceSequence: string | null): boolean {
        if (sourceSequence === null || sourceSequence.length === 0) {
            return true;
        }
        for (let i = 0; i < sourceSequence.length; i++) {
            if (!/\s/.test(sourceSequence.charAt(i))) {
                return false;
            }
        }
        return true;
    }

    public static isEmpty(sourceSequence: string | null): boolean {
        return sourceSequence === null || sourceSequence.length === 0;
    }
}
