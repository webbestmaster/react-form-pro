// @flow

/* eslint-disable react/no-multi-comp */

/* global fetch */

import React, {type Node} from 'react';

import {FormGenerator} from '../../../../src/form';

import {getIsRequired} from '../../../../src/form/form-generator/validate/validate';

import {Markdown} from '../layout/c-markdown';

import type {
    FormGeneratorConfigType,
    FormGeneratorFormDataType,
    FieldSetWrapperDataType,
} from '../../../../src/form/form-generator/form-generator-type';

import {InputPassword} from '../../../../src/form/form-generator/field/input-password/c-input-text';
import {InputText} from '../../../../src/form/form-generator/field/input-text/c-input-text';
import {FieldSet} from '../../../../src/form/form-generator/field/field-set/field-set';

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

export function App(): Node {
    // +config: FormGeneratorConfigType,
    //     +onSubmit: (formData: FormGeneratorFormDataType) => mixed,
    //     +onError: (errorList: Array<Error>, formData: FormGeneratorFormDataType) => mixed,
    //     +footer: Node,

    const config: FormGeneratorConfigType = {
        fieldSetList: [
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
        ],
    };

    const footer: Node = <div>the footer</div>;

    return (
        <div className="example-wrapper">
            <FormGenerator config={config} footer={footer} onError={handleError} onSubmit={handleSubmit}/>
        </div>
    );
}
