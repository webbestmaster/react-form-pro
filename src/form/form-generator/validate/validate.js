// @flow

/* global document */

import type {FormGeneratorFormDataType, FromGeneratorInputValueType} from '../form-generator-type';
import {isBoolean, isFile, isNull, isNumber, isString} from '../../../lib/is';
import {getSlug} from '../../../lib/string';

const errorMessageFieldRequired = 'Required field!';

export function noValidate(
    name: string,
    value: FromGeneratorInputValueType,
    formData: FormGeneratorFormDataType
): Array<Error> {
    return [];
}

// eslint-disable-next-line complexity
export function getIsRequired(
    name: string,
    value: FromGeneratorInputValueType,
    formData: FormGeneratorFormDataType
): Array<Error> {
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

export function isValidHTml(
    name: string,
    html: FromGeneratorInputValueType,
    formData: FormGeneratorFormDataType
): Array<Error> {
    if (typeof document === 'undefined') {
        return [];
    }

    if (!isString(html)) {
        return [new Error('isValidHTml support string only')];
    }

    const wrapper = document.createElement('div');

    wrapper.innerHTML = html;

    if (wrapper.innerHTML.trim() === html.trim()) {
        return [];
    }

    return [new Error('HTML is not valid')];
}

export function validateSlug(
    name: string,
    value: FromGeneratorInputValueType,
    formData: FormGeneratorFormDataType
): Array<Error> {
    if (!value) {
        return [new Error(errorMessageFieldRequired)];
    }

    if (!isString(value)) {
        return [new Error('slug support string only')];
    }

    if (!value.trim()) {
        return [new Error(errorMessageFieldRequired)];
    }

    if (value !== getSlug(value)) {
        return [new Error('Invalid slug!')];
    }

    return [];
}
