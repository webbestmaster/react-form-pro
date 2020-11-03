// @flow

/* global document */

import type {FormDataType, FormInputValueType} from '../form-type';
import {isBoolean, isFile, isNull, isNumber, isString} from '../../lib/is';

const errorMessageFieldRequired = 'Required field!';

export function noValidate(name: string, value: FormInputValueType, formData: FormDataType): Array<Error> {
    return [];
}

// eslint-disable-next-line complexity
export function validateRequired(name: string, value: FormInputValueType, formData: FormDataType): Array<Error> {
    const requiredErrorList = [new Error(errorMessageFieldRequired)];

    if (isString(value)) {
        return value === '' ? requiredErrorList : [];
    }

    if (isNumber(value)) {
        return value <= 0 || Number.isNaN(value) ? requiredErrorList : [];
    }

    if (isBoolean(value)) {
        return value === false ? requiredErrorList : [];
    }

    if (isNull(value)) {
        return requiredErrorList;
    }

    if (Array.isArray(value)) {
        return value.length === 0 ? requiredErrorList : [];
    }

    if (isFile(value)) {
        return [];
    }

    console.log(value);
    throw new Error('Type has no validation! Add validation here!');
}
