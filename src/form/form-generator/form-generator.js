// @flow

import React, {Component, type Node} from 'react';

import {hasProperty, isFunction} from '../../lib/is';
// import type {SnackbarContextType} from '../../provider/snackbar/snackbar-context-type';
// import {SnackbarContextConsumer} from '../../provider/snackbar/c-snackbar-context';
// import type {PopupContextType} from '../../provider/popup/popup-context-type';
// import {PopupContextConsumer} from '../../provider/popup/c-popup-context';

import fieldStyle from './field/field.scss';

import type {
    FieldDataType,
    FieldSetDataType,
    FormGeneratorConfigType,
    FormGeneratorFormDataType,
    FromGeneratorInputValueType,
    InputComponentOnChangeType,
} from './form-generator-type';

type PropsType = {|
    +config: FormGeneratorConfigType,
    +onSubmit: (formData: FormGeneratorFormDataType) => mixed,
    +onError: (errorList: Array<Error>, formData: FormGeneratorFormDataType) => mixed,
    +footer: Node,
|};

type StateType = {|
    +formData: FormGeneratorFormDataType,
    +formValidation: {
        +[key: string]: Array<Error>,
    },
|};

export class FormGenerator extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            formData: this.getDefaultFormData(),
            formValidation: {},
        };
    }

    getDefaultFormData(): FormGeneratorFormDataType {
        const {props} = this;
        const {config} = props;
        const {fieldSetList} = config;
        const defaultFormData = {};

        fieldSetList.forEach((fieldSetData: FieldSetDataType) => {
            const {fieldList} = fieldSetData;

            fieldList.forEach((fieldData: FieldDataType) => {
                const {name, defaultValue} = fieldData;

                defaultFormData[name] = defaultValue;
            });
        });

        return defaultFormData;
    }

    createOnChangeFieldHandler(fieldData: FieldDataType): InputComponentOnChangeType {
        return (value: FromGeneratorInputValueType) => {
            const {state} = this;
            const {name, validate} = fieldData;
            const formData = {...state.formData, [name]: value};
            const fieldErrorList = validate(name, value, formData);

            if (fieldErrorList.length === 0) {
                this.setState({formData, formValidation: {...state.formValidation, [name]: []}});
                return;
            }

            this.setState({formData});
        };
    }

    createOnBlurFieldHandler(fieldData: FieldDataType): InputComponentOnChangeType {
        return (value: FromGeneratorInputValueType) => {
            const {name, validate} = fieldData;
            const {state} = this;
            const formData = {...state.formData, [name]: value};
            const fieldErrorList = validate(name, value, formData);
            const formValidation = {...state.formValidation, [name]: fieldErrorList};

            this.setState({formData, formValidation});
        };
    }

    renderField = (fieldData: FieldDataType): Node => {
        const {isHidden} = fieldData;

        return isHidden === true ? this.renderFieldHidden(fieldData) : this.renderFieldVisible(fieldData);
    };

    renderFieldHidden(fieldData: FieldDataType): Node {
        return (
            <div className={fieldStyle.form_input__hidden} key={fieldData.name}>
                {this.renderFieldVisible(fieldData)}
            </div>
        );
    }

    renderFieldVisible(fieldData: FieldDataType): Node {
        const {state} = this;
        const {formValidation} = state;
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

        const onChangeFieldHandler = this.createOnChangeFieldHandler(fieldData);
        const onBlurFieldHandler = this.createOnBlurFieldHandler(fieldData);
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

    renderFieldSet = (fieldSetData: FieldSetDataType): Node => {
        const {name, fieldList, fieldSetWrapper} = fieldSetData;
        const {component: FieldSetWrapper, legend} = fieldSetWrapper;

        return (
            <FieldSetWrapper key={name} legend={legend}>
                {fieldList.map(this.renderField)}
            </FieldSetWrapper>
        );
    };

    renderFieldSetList = (fieldSetDataList: Array<FieldSetDataType>): Array<Node> => {
        return fieldSetDataList.map(this.renderFieldSet);
    };

    validateFieldSetList(): Array<Error> {
        const {props, state} = this;
        const {formData} = state;
        const formValidation = {};
        const {config} = props;
        const {fieldSetList} = config;

        const errorList: Array<Error> = [];

        fieldSetList.forEach((fieldSetData: FieldSetDataType) => {
            const {fieldList} = fieldSetData;

            fieldList.forEach((fieldData: FieldDataType) => {
                const {name, validate} = fieldData;
                const fieldErrorList = validate(name, formData[name], formData);

                formValidation[name] = fieldErrorList;

                errorList.push(...fieldErrorList);
            });
        });

        this.setState({formValidation});

        console.log('---> formData');
        console.log(formData);

        return errorList;
    }

    handleFormSubmit = (evt: SyntheticEvent<HTMLFormElement>) => {
        evt.preventDefault();

        const {props, state} = this;
        const {onError, onSubmit} = props;
        const {formData} = state;

        const errorList = this.validateFieldSetList();

        if (errorList.length === 0) {
            onSubmit(formData);
            return;
        }

        console.log('Form has the Errors!');
        console.log(errorList);

        if (isFunction(onError)) {
            onError(errorList, formData);
        }
    };

    render(): Node {
        const {props} = this;
        const {config, footer} = props;
        const {fieldSetList} = config;

        return (
            <form action="#" className={fieldStyle.form__generator} method="post" onSubmit={this.handleFormSubmit}>
                {this.renderFieldSetList(fieldSetList)}
                {footer}
            </form>
        );
    }
}
