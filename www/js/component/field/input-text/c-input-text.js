// @flow

import React from 'react';

import {classNames} from '../../../lib/css';
import type {InputComponentPropsType} from '../../../../../src/form/form-type';
import fieldStyle from '../field.scss';
import {isString} from '../../../../../src/lib/is';
import {cleanText} from '../../../lib/string';

type PropsType = InputComponentPropsType;

export function InputText(props: PropsType): React$Node {
    const {name, onChange, onBlur, errorList, defaultValue, placeholder, label, isRequired, icon, hasAutoFocus} = props;

    function handleOnChange(evt: SyntheticEvent<HTMLInputElement>) {
        const {currentTarget} = evt;
        const {value} = currentTarget;

        const trimmedValue = cleanText(value);

        onChange(trimmedValue);
    }

    function handleOnBlur(evt: SyntheticEvent<HTMLInputElement>) {
        const {currentTarget} = evt;
        const {value} = currentTarget;
        const trimmedValue = cleanText(value);

        if (trimmedValue !== value) {
            currentTarget.value = trimmedValue;
        }

        onBlur(trimmedValue);
    }

    if (!isString(defaultValue)) {
        console.error('InputText: Support String Only.');
        return null;
    }

    return (
        <label className={fieldStyle.form__label_wrapper}>
            <span className={fieldStyle.form__label_description}>{label}</span>
            <input
                autoFocus={hasAutoFocus === true}
                className={classNames(fieldStyle.form__input, {
                    [fieldStyle.form__input__invalid]: errorList.length > 0,
                })}
                defaultValue={defaultValue}
                name={name}
                onBlur={handleOnBlur}
                onChange={handleOnChange}
                placeholder={placeholder}
                type="text"
            />
            {/* <code>errorList: {errorList.map((error: Error): string => error.message)}</code>*/}
        </label>
    );
}
