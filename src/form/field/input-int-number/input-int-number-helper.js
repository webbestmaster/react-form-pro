// @flow

export function stringToIntClearNumber(likeNumberString: string): number | null {
    const intNumber = likeNumberString.replace(/\D+/g, '');

    if (intNumber.length > 0) {
        return Number.parseInt(intNumber, 10);
    }

    return null;
}
