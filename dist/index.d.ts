// WARNING: index.d.ts is not tested
// TODO: test index.d.ts in typescript project

declare module 'react-form-pro' {
    export type FormPrimitiveInputValueType = string | number | boolean | null | File;

    export type FormInputValueType = FormPrimitiveInputValueType | Array<FormPrimitiveInputValueType>;

    export interface FormDataType { [key: string]: FormInputValueType }

    export interface FormValidationType { [key: string]: Array<Error> }

    export type InputComponentOnChangeType = (value: FormInputValueType) => void;

    export type FormValidateType = (
        name: string,
        value: FormInputValueType,
        formData: FormDataType,
    ) => Array<Error>;

    export interface InputComponentOptionType {
        title: string | number,
        value: string | number,
    }

    export interface InputComponentPropsType {
        name: string,
        onChange: InputComponentOnChangeType,
        onBlur: InputComponentOnChangeType,
        errorList: Array<Error>,
        defaultValue: FormInputValueType,
        // eslint-disable-next-line id-match
        placeholder: React.ReactNode,
        // eslint-disable-next-line id-match
        label: React.ReactNode,

        // use as attribute "accept"
        accept?: string,

        // use for select
        optionList?: Array<InputComponentOptionType>,

        isHidden?: boolean,

        // for custom data
        additional?: any,
    }

    export interface FieldDataType {
        name: string,
        // eslint-disable-next-line id-match
        inputComponent: React.FC<InputComponentPropsType>,
        validate: FormValidateType,
        defaultValue: FormInputValueType,
        // eslint-disable-next-line id-match
        placeholder: React.ReactNode,
        // eslint-disable-next-line id-match
        label: React.ReactNode,

        // use as attribute "accept"
        accept?: string,

        // use for select
        optionList?: Array<InputComponentOptionType>,

        isHidden?: boolean,

        // for custom data
        additional?: any,
    }

    export interface ShapeFieldDataType {
        name?: string,
        // eslint-disable-next-line id-match
        inputComponent?: React.FC<InputComponentPropsType>,
        validate?: FormValidateType,
        defaultValue?: FormInputValueType,
        // eslint-disable-next-line id-match
        placeholder?: React.ReactNode,
        // eslint-disable-next-line id-match
        label?: React.ReactNode,

        // use as attribute "accept"
        accept?: string,

        // use for select
        optionList?: Array<InputComponentOptionType>,

        isHidden?: boolean,

        // for custom data
        additional?: any,
    }

    export interface FormFieldSetType {
        // eslint-disable-next-line id-match
        legend?: React.ReactNode,
        inputList: Array<FieldDataType>,
    }

    export type FormButtonTypeNameType = 'button' | 'submit' | 'reset';

    export interface FormButtonType {
        // eslint-disable-next-line id-match
        title: React.ReactNode,
        type: FormButtonTypeNameType,
        isPrimary?: boolean,
        onClick?: () => void,
        accessKey?: string,

        // for custom data
        additional?: any,
    }

    export interface ButtonComponentPropsType {
        // eslint-disable-next-line id-match
        title: React.ReactNode,
        type: FormButtonTypeNameType,
        isPrimary?: boolean,
        onClick?: () => void,
        accessKey?: string,

        // for custom data
        additional?: any,
    }

    export interface FormPropsType {
        // eslint-disable-next-line id-match
        title: React.ReactNode,
        fieldSetList: Array<FormFieldSetType>,
        onSubmit: (formData: FormDataType) => void,
        onError: (errorList: Array<Error>, formData: FormDataType) => void,
        // eslint-disable-next-line id-match
        buttonComponent: React.FC<ButtonComponentPropsType>,
        buttonList: Array<FormButtonType>,
        className?: string,
    }

    // eslint-disable-next-line id-match
    export const Form: React.FC<FormPropsType>;

    export const formButtonTypeName: { [key in FormButtonTypeNameType]: FormButtonTypeNameType };

    export function noValidate(name: string, value: FormInputValueType, formData: FormDataType): Array<Error>;

    export function validateRequired(
        name: string,
        value: FormInputValueType,
        formData: FormDataType,
    ): Array<Error>;
}

declare module 'react-form-pro/dist/style.css' {
    type StyleType = {};

    const style: StyleType;

    export default style;
}
