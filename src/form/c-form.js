// @flow

import React, {useState} from 'react';

import {hasProperty} from '../lib/is';

import type {
    FieldDataType,
    FormButtonType,
    FormDataType,
    FormFieldSetType,
    FormPropsType,
    FormValidationType,
    FormInputValueType,
    InputComponentOnChangeType,
} from './form-type';

import {getDefaultFormData} from './form-helper';
import {style} from './form-const';

type PropsType = FormPropsType;

export function Form(props: PropsType): React$Node {
    const {fieldSetList, onError, onSubmit, buttonList, title, buttonComponent: ButtonComponent, className} = props;

    const [formData, setFomData] = useState<FormDataType>(getDefaultFormData(props));
    const [formValidation, setFormValidation] = useState<FormValidationType>({});

    function createOnChangeFieldHandler(fieldData: FieldDataType): InputComponentOnChangeType {
        return (value: FormInputValueType) => {
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
        return (value: FormInputValueType) => {
            const {name, validate} = fieldData;
            const newFormData = {...formData, [name]: value};
            const fieldErrorList = validate(name, value, newFormData);
            const newFormValidation = {...formValidation, [name]: fieldErrorList};

            setFomData(newFormData);
            setFormValidation(newFormValidation);
        };
    }

    function renderInput(fieldData: FieldDataType): React$Node {
        const {isHidden} = fieldData;

        return isHidden === true ? renderFieldHidden(fieldData) : renderFieldVisible(fieldData);
    }

    function renderFieldHidden(fieldData: FieldDataType): React$Node {
        const {name} = fieldData;

        return (
            <div key={name} style={style.hidden}>
                {renderFieldVisible(fieldData)}
            </div>
        );
    }

    function renderFieldVisible(fieldData: FieldDataType): React$Node {
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
            isRequired,
            isWide,
            icon,
            hasAutoFocus,
        } = fieldData;

        const onChangeFieldHandler = createOnChangeFieldHandler(fieldData);
        const onBlurFieldHandler = createOnBlurFieldHandler(fieldData);
        const errorList = hasProperty(formValidation, name) ? formValidation[name] : [];

        return (
            <InputComponent
                accept={accept}
                additional={additional}
                defaultValue={defaultValue}
                errorList={errorList}
                hasAutoFocus={hasAutoFocus}
                icon={icon}
                isHidden={isHidden}
                isRequired={isRequired}
                isWide={isWide}
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

    function renderFieldSet(fieldSetData: FormFieldSetType, index: number): React$Node {
        const {legend, inputList} = fieldSetData;

        return (
            <fieldset key={index}>
                {legend ? <legend>{legend}</legend> : null}

                {inputList.map(renderInput)}
            </fieldset>
        );
    }

    function renderFieldSetList(fieldSetListArgument: Array<FormFieldSetType>): Array<React$Node> {
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

    function renderButton(buttonData: FormButtonType, index: number): React$Node {
        const {
            isPrimary,
            onClick,
            title: buttonContent,
            type,
            accessKey,
            isWide,
            additional,
            icon,
            hasAutoFocus,
        } = buttonData;

        return (
            <ButtonComponent
                accessKey={accessKey}
                additional={additional}
                hasAutoFocus={hasAutoFocus}
                icon={icon}
                isPrimary={isPrimary}
                isWide={isWide}
                key={index}
                onClick={onClick}
                title={buttonContent}
                type={type}
            />
        );
    }

    function renderButtonList(buttonDataList: Array<FormButtonType>): React$Node {
        return <footer>{buttonDataList.map(renderButton)}</footer>;
    }

    const formClassName = className || '';

    return (
        <form action="#" className={formClassName} method="post" onSubmit={handleFormSubmit}>
            {title}
            {renderFieldSetList(fieldSetList)}
            {renderButtonList(buttonList)}
        </form>
    );
}
