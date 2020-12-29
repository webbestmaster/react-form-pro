// @flow

/* eslint-disable react/no-multi-comp */

/* global fetch */

import React from 'react';

import {Form} from '../../../../src/form';
import {validateRequired} from '../../../../src/form/validate/validate';
import type {FormButtonType, FormDataType, FormFieldSetType} from '../../../../src/form/form-type';
import {InputText} from '../field/input-text/c-input-text';
import {formButtonTypeName} from '../../../../src/form/form-const';
import {InputCheckbox} from '../field/input-checkbox/c-input-checkbox';
import {Button} from '../button/c-button';

function handleSubmit(formData: FormDataType) {
    console.log('handleSubmit', formData);
}

function handleError(errorList: Array<Error>, formData: FormDataType) {
    console.log('handleError', errorList, formData);
}

const fieldSetList: Array<FormFieldSetType> = [
    {
        legend: 'login / password2',
        inputList: [
            {
                name: 'login1',
                inputComponent: InputText,
                validate: validateRequired,
                defaultValue: '',
                placeholder: 'Your nick name...',
                label: 'Login2',
                isHidden: false,
                isRequired: true,
                icon: {
                    src: '',
                },
                // hasAutoFocus: false,
            },

            /*
            {
                name: 'password',
                inputComponent: InputPassword,
                validate: validateRequired,
                defaultValue: '',
                placeholder: 'Your password...',
                label: 'Password',
                isHidden: false,
            },
*/
            {
                name: 'check me',
                inputComponent: InputCheckbox,
                validate: validateRequired,
                defaultValue: true,
                placeholder: null,
                label: 'use checkbox',
                isHidden: false,
                isRequired: true,
                icon: {
                    src: '',
                },
                hasAutoFocus: false,
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
        legend: 'test-form',
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
        isWide: false,
        icon: {
            src: '',
        },
        hasAutoFocus: true,
    },
];

export function App(): React$Node {
    return (
        <div className="example-wrapper">
            <Form
                buttonComponent={Button}
                buttonList={buttonList}
                fieldSetList={fieldSetList}
                onError={handleError}
                onSubmit={handleSubmit}
                title="My form"
            />
        </div>
    );
}
