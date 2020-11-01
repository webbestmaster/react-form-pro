// @flow

/* eslint-disable react/no-multi-comp */

/* global fetch */

import React, {type Node} from 'react';

import {Form} from '../../../../src/form';

import {getIsRequired} from '../../../../src/form/validate/validate';

import {Markdown} from '../layout/c-markdown';

import type {
    FormDataType,
    FieldSetWrapperDataType,
    FormFieldSetType,
    FormButtonType,
} from '../../../../src/form/form-type';

import {InputPassword} from '../../../../src/form/field/input-password/c-input-text';
import {InputText} from '../../../../src/form/field/input-text/c-input-text';

import {formButtonTypeName} from '../../../../src/form/form-const';

import {InputCheckbox} from '../../../../src/form/field/input-checkbox/c-input-checkbox';

import appExampleMd from './app-example.md';

function FieldSetWrapper(props: FieldSetWrapperDataType): Node {
    const {children, legend} = props;

    return (
        <div>
            <h4>{legend}</h4>
            <hr/>
            {children}
        </div>
    );
}

function handleSubmit(formData: FormDataType) {
    console.log('handleSubmit', formData);
}

function handleError(errorList: Array<Error>, formData: FormDataType) {
    console.log('handleError', errorList, formData);
}

const fieldSetList: Array<FormFieldSetType> = [
    {
        name: 'login / password',
        inputList: [
            {
                name: 'login',
                inputComponent: InputText,
                validate: getIsRequired,
                defaultValue: '',
                placeholder: 'Your nick name...',
                label: 'Login',
                isHidden: false,
            },
            {
                name: 'password',
                inputComponent: InputPassword,
                validate: getIsRequired,
                defaultValue: '',
                placeholder: 'Your password...',
                label: 'Password',
                isHidden: false,
            },
            {
                name: 'check me',
                inputComponent: InputCheckbox,
                validate: getIsRequired,
                defaultValue: true,
                placeholder: null,
                label: 'use checkbox',
                isHidden: false,
            },
        ],

        /*
        fieldSetWrapper: {
            component: FieldSet,
            legend: null,
        },
*/
    },
    {
        name: 'test-form',
        inputList: [],

        /*
        fieldSetWrapper: {
            component: FieldSetWrapper,
            legend: <h4>fieldSetWrapper - legend</h4>,
        },
*/
    },
];

const buttonList: Array<FormButtonType> = [
    {
        isPrimary: false,
        onClick: console.log,
        title: 'apply form',
        type: formButtonTypeName.submit,
    },
];

export function App(): Node {
    return (
        <div className="example-wrapper">
            <Form buttonList={buttonList} fieldSetList={fieldSetList} onError={handleError} onSubmit={handleSubmit}/>
        </div>
    );
}
