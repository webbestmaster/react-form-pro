// @flow

import React, {type Node, useState} from 'react';

import {hasProperty} from '../lib/is';

import {IsRender} from '../layout/is-render/c-is-render';

import fieldStyle from './field/field.scss';

import type {
    FieldDataType,
    FormButtonType,
    FormDataType,
    FormFieldSetType,
    FormPropsType,
    FormValidationType,
    FromInputValueType,
    InputComponentOnChangeType,
} from './form-type';

import {getDefaultFormData} from './form-helper';

type PropsType = FormPropsType;

export function Form(props: PropsType): Node {
    const {fieldSetList, onError, onSubmit, buttonList, title} = props;

    const [formData, setFomData] = useState<FormDataType>(getDefaultFormData(props));
    const [formValidation, setFormValidation] = useState<FormValidationType>({});

    function createOnChangeFieldHandler(fieldData: FieldDataType): InputComponentOnChangeType {
        return (value: FromInputValueType) => {
            const {name, validate} = fieldData;
            const newFormData = {...formData, [name]: value};
            const fieldErrorList = validate(name, value, newFormData);

            setFomData(newFormData);

            if (fieldErrorList.length === 0) {
                setFormValidation({...formValidation, [name]: []});
            }
        };
    }

    function createOnBlurFieldHandler(fieldData: FieldDataType): InputComponentOnChangeType {
        return (value: FromInputValueType) => {
            const {name, validate} = fieldData;
            const newFormData = {...formData, [name]: value};
            const fieldErrorList = validate(name, value, newFormData);
            const newFormValidation = {...formValidation, [name]: fieldErrorList};

            setFomData(newFormData);
            setFormValidation(newFormValidation);
        };
    }

    function renderInput(fieldData: FieldDataType): Node {
        const {isHidden} = fieldData;

        return isHidden === true ? renderFieldHidden(fieldData) : renderFieldVisible(fieldData);
    }

    function renderFieldHidden(fieldData: FieldDataType): Node {
        const {name} = fieldData;

        return (
            <div className={fieldStyle.form_input__hidden} key={name}>
                {renderFieldVisible(fieldData)}
            </div>
        );
    }

    function renderFieldVisible(fieldData: FieldDataType): Node {
        const {
            name,
            defaultValue,
            placeholder,
            label,
            accept,
            optionList,
            isHidden,
            additional,
            inputComponent: InputComponent,
        } = fieldData;

        const onChangeFieldHandler = createOnChangeFieldHandler(fieldData);
        const onBlurFieldHandler = createOnBlurFieldHandler(fieldData);
        const errorList = hasProperty(formValidation, name) ? formValidation[name] : [];

        return (
            <InputComponent
                isHidden={isHidden}
                accept={accept}
                additional={additional}
                defaultValue={defaultValue}
                errorList={errorList}
                key={name}
                label={label}
                name={name}
                onBlur={onBlurFieldHandler}
                onChange={onChangeFieldHandler}
                optionList={optionList}
                placeholder={placeholder}
            />
        );
    }

    function renderFieldSet(fieldSetData: FormFieldSetType, index: number): Node {
        const {legend, inputList} = fieldSetData;
        const hasLegend = Boolean(legend);

        return (
            <fieldset key={index}>
                <IsRender isRender={hasLegend}>
                    <legend>{legend}</legend>
                </IsRender>

                {inputList.map(renderInput)}
            </fieldset>
        );
    }

    function renderFieldSetList(fieldSetListArgument: Array<FormFieldSetType>): Array<Node> {
        return fieldSetListArgument.map(renderFieldSet);
    }

    function validateFieldSetList(): Array<Error> {
        const newFormValidation = {};

        const errorList: Array<Error> = [];

        fieldSetList.forEach((fieldSetData: FormFieldSetType) => {
            const {inputList} = fieldSetData;

            inputList.forEach((fieldData: FieldDataType) => {
                const {name, validate} = fieldData;
                const fieldErrorList = validate(name, formData[name], formData);

                newFormValidation[name] = fieldErrorList;

                errorList.push(...fieldErrorList);
            });
        });

        setFormValidation(newFormValidation);

        console.log('---> formData');
        console.log(formData);

        return errorList;
    }

    function handleFormSubmit(evt: SyntheticEvent<HTMLFormElement>) {
        evt.preventDefault();

        const errorList = validateFieldSetList();

        if (errorList.length === 0) {
            onSubmit(formData);
            return;
        }

        console.log('Form has the Errors!');
        console.log(errorList);

        onError(errorList, formData);
    }

    function renderButton(buttonData: FormButtonType, index: number): Node {
        const {isPrimary, onClick, title: buttonContent, type} = buttonData;

        return (
            // eslint-disable-next-line react/button-has-type
            <button key={index} onClick={onClick} type={type}>
                {buttonContent}
                {' - '}
                {isPrimary === true ? 'primary' : 'secondary'}
            </button>
        );
    }

    function renderButtonList(buttonDataList: Array<FormButtonType>): Node {
        return <div>{buttonDataList.map(renderButton)}</div>;
    }

    return (
        <form action="#" className={fieldStyle.form} method="post" onSubmit={handleFormSubmit}>
            <h3>{title}</h3>
            {renderFieldSetList(fieldSetList)}
            {renderButtonList(buttonList)}
        </form>
    );
}
