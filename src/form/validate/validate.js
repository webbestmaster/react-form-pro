// @flow

/* global document */

import type {FormDataType, FormInputValueType} from '../form-type';
import {isBoolean, isFile, isNull, isString, isUndefined} from '../../lib/is';

const errorMessageFieldRequired = 'Required field!';

export function noValidate(name: string, value: FormInputValueType, formData: FormDataType): Array<Error> {
    return [];
}

// eslint-disable-next-line complexity, sonarjs/cognitive-complexity
export function validateRequired(name: string, value: FormInputValueType, formData: FormDataType): Array<Error> {
    const requiredErrorList = [new Error(errorMessageFieldRequired)];
    const emptyList = [];

    // check undefined
    if (isUndefined(value)) {
        return requiredErrorList;
    }

    // check null
    if (isNull(value)) {
        return requiredErrorList;
    }

    // check number and NaN
    if (typeof value === 'number') {
        return Number.isNaN(value) || value <= 0 ? requiredErrorList : emptyList;
    }

    // check string
    if (isString(value)) {
        return value.trim() === '' ? requiredErrorList : emptyList;
    }

    // check boolean
    if (isBoolean(value)) {
        return value === false ? requiredErrorList : emptyList;
    }

    // check Array
    if (Array.isArray(value)) {
        return value.length === 0 ? requiredErrorList : emptyList;
    }

    // check File
    if (isFile(value)) {
        return emptyList;
    }

    return requiredErrorList;
}
