// @flow

import React, {type Node, useState} from 'react';

import {hasProperty} from '../lib/is';

import fieldStyle from './field/field.scss';

import type {
    FieldDataType,
    FormButtonType,
    FormFieldSetType,
    FormDataType,
    FormGeneratorPropsType,
    FormValidationType,
    FromGeneratorInputValueType,
    InputComponentOnChangeType,
} from './form-type';

import {getDefaultFormData} from './form-helper';

type PropsType = FormGeneratorPropsType;

export function Form(props: PropsType): Node {
    const {fieldSetList, onError, onSubmit, buttonList} = props;

    const [formData, setFomData] = useState<FormDataType>(getDefaultFormData(props));
    const [formValidation, setFormValidation] = useState<FormValidationType>({});

    function createOnChangeFieldHandler(fieldData: FieldDataType): InputComponentOnChangeType {
        return (value: FromGeneratorInputValueType) => {
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
        return (value: FromGeneratorInputValueType) => {
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
        return (
            <div className={fieldStyle.form_input__hidden} key={fieldData.name}>
                {renderFieldVisible(fieldData)}
            </div>
        );
    }

    function renderFieldVisible(fieldData: FieldDataType): Node {
        const {
            name,
            fieldComponent: FieldComponent,
            defaultValue,
            placeholder,
            labelText,
            content,
            accept,
            isMultiple,
            filePathPrefix,
            uploadFile,
            getAutocompleteListData,
        } = fieldData;

        const onChangeFieldHandler = createOnChangeFieldHandler(fieldData);
        const onBlurFieldHandler = createOnBlurFieldHandler(fieldData);
        const errorList = hasProperty(formValidation, name) ? formValidation[name] : [];

        return (
            <FieldComponent
                accept={accept}
                content={content}
                defaultValue={defaultValue}
                errorList={errorList}
                filePathPrefix={filePathPrefix}
                getAutocompleteListData={getAutocompleteListData}
                isMultiple={isMultiple}
                labelText={labelText}
                name={name}
                onBlur={onBlurFieldHandler}
                onChange={onChangeFieldHandler}
                placeholder={placeholder}
                uploadFile={uploadFile}
            />
        );
    }

    function renderFieldSet(fieldSetData: FormFieldSetType): Node {
        const {name, inputList /* fieldSetWrapper*/} = fieldSetData;
        // const {component: FieldSetWrapper, legend} = fieldSetWrapper;

        return <fieldset>{inputList.map(renderInput)}</fieldset>;

        /*
        return (
            <FieldSetWrapper key={name} legend={legend}>
                {inputList.map(renderField)}
            </FieldSetWrapper>
        );
        */
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

    function renderButton(buttonData: FormButtonType): Node {
        const {isPrimary, onClick, title, type} = buttonData;

        return (
            // eslint-disable-next-line react/button-has-type
            <button onClick={onClick} type={type}>
                {title}
                {' - '}
                {isPrimary ? 'primary' : 'secondary'}
            </button>
        );
    }

    function renderButtonList(buttonDataList: Array<FormButtonType>): Node {
        return <div>{buttonDataList.map(renderButton)}</div>;
    }

    return (
        <form action="#" className={fieldStyle.form__generator} method="post" onSubmit={handleFormSubmit}>
            {renderFieldSetList(fieldSetList)}
            {renderButtonList(buttonList)}
        </form>
    );
}
