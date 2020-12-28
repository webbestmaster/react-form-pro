// @flow

import React from 'react';

import {classNames} from '../../../lib/css';
import type {InputComponentPropsType} from '../../../../../src/form/form-type';
import fieldStyle from '../field.scss';
import {isString} from '../../../../../src/lib/is';

type PropsType = InputComponentPropsType;

export function InputPassword(props: PropsType): React$Node {
    const {name, onChange, onBlur, errorList, defaultValue, placeholder, label} = props;

    function handleOnChange(evt: SyntheticEvent<HTMLInputElement>) {
        const {currentTarget} = evt;
        const {value} = currentTarget;

        onChange(value);
    }

    function handleOnBlur(evt: SyntheticEvent<HTMLInputElement>) {
        const {currentTarget} = evt;
        const {value} = currentTarget;

        onBlur(value);
    }

    if (!isString(defaultValue)) {
        console.error('InputPassword: Support String Only.');
        return null;
    }

    return (
        <label className={fieldStyle.form__label_wrapper}>
            <span className={fieldStyle.form__label_description}>{label}</span>
            <input
                className={classNames(fieldStyle.form__input, {
                    [fieldStyle.form__input__invalid]: errorList.length > 0,
                })}
                defaultValue={defaultValue}
                name={name}
                onBlur={handleOnBlur}
                onChange={handleOnChange}
                placeholder={placeholder}
                type="password"
            />
            {/* <code>errorList: {errorList.map((error: Error): string => error.message)}</code>*/}
        </label>
    );
}
