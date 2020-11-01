// @flow

/* eslint-disable react/no-multi-comp */

/* global fetch */

import React, {type Node} from 'react';

import {FormGenerator} from '../../../../src/form';

import {getIsRequired} from '../../../../src/form/form-generator/validate/validate';

import {Markdown} from '../layout/c-markdown';

import type {
    FormGeneratorFormDataType,
    FieldSetWrapperDataType,
    FormFieldSetType,
    FormButtonType,
} from '../../../../src/form/form-generator/form-generator-type';

import {InputPassword} from '../../../../src/form/form-generator/field/input-password/c-input-text';
import {InputText} from '../../../../src/form/form-generator/field/input-text/c-input-text';
import {FieldSet} from '../../../../src/form/form-generator/field/field-set/field-set';

import {formButtonTypeName} from '../../../../src/form/form-generator/form-generator-const';

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

function handleSubmit(formData: FormGeneratorFormDataType) {
    console.log('handleSubmit', formData);
}

function handleError(errorList: Array<Error>, formData: FormGeneratorFormDataType) {
    console.log('handleError', errorList, formData);
}

const fieldSetList: Array<FormFieldSetType> = [
    {
        name: 'login / password',
        fieldList: [
            {
                name: 'login',
                fieldComponent: InputText,
                validate: getIsRequired,
                defaultValue: '',
                placeholder: 'Your nick name...',
                labelText: 'Login',
                isHidden: false,
            },
            {
                name: 'password',
                fieldComponent: InputPassword,
                validate: getIsRequired,
                defaultValue: '',
                placeholder: 'Your password...',
                labelText: 'Password',
                isHidden: false,
            },
        ],
        fieldSetWrapper: {
            component: FieldSet,
            legend: null,
        },
    },
    {
        name: 'test-form',
        fieldList: [],
        fieldSetWrapper: {
            component: FieldSetWrapper,
            legend: <h4>fieldSetWrapper - legend</h4>,
        },
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
            <FormGenerator
                buttonList={buttonList}
                fieldSetList={fieldSetList}
                onError={handleError}
                onSubmit={handleSubmit}
            />
        </div>
    );
}
