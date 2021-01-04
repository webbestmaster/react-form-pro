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
        title: JSX.Element | string,
        value: string,
    }

    export interface InputIconType {
        src?: string;
    }

    export interface InputComponentPropsType {
        name: string,
        onChange: InputComponentOnChangeType,
        onBlur: InputComponentOnChangeType,
        errorList: Array<Error>,
        defaultValue: FormInputValueType,
        placeholder: JSX.Element | Array<JSX.Element> | string,
        label: JSX.Element | Array<JSX.Element> | string,
        isRequired?: boolean,
        isWide?: boolean,
        icon?: InputIconType,
        hasAutoFocus?: boolean,
        className?: string,

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
        inputComponent: React.FC<InputComponentPropsType>,
        validate: FormValidateType,
        defaultValue: FormInputValueType,
        placeholder: JSX.Element | Array<JSX.Element> | string,
        label: JSX.Element | Array<JSX.Element> | string,
        isRequired?: boolean,
        isWide?: boolean,
        icon?: InputIconType,
        hasAutoFocus?: boolean,
        className?: string,

        // use as attribute "accept"
        accept?: string,

        // use for select
        optionList?: Array<InputComponentOptionType>,

        isHidden?: boolean,

        // for custom data
        additional?: any,
    }

/*
    export interface ShapeFieldDataType {
        name?: string,
        inputComponent?: React.FC<InputComponentPropsType>,
        validate?: FormValidateType,
        defaultValue?: FormInputValueType,
        placeholder?: JSX.Element | Array<JSX.Element>,
        label?: JSX.Element | Array<JSX.Element>,

        // use as attribute "accept"
        accept?: string,

        // use for select
        optionList?: Array<InputComponentOptionType>,

        isHidden?: boolean,

        // for custom data
        additional?: any,
    }
*/

    export interface FormFieldSetType {
        legend?: JSX.Element | Array<JSX.Element> | string,
        inputList: Array<FieldDataType>,
    }

    export type FormButtonTypeNameType = 'button' | 'submit' | 'reset';

    export interface FormButtonType {
        title: JSX.Element | Array<JSX.Element> | string,
        type: FormButtonTypeNameType,
        isPrimary?: boolean,
        onClick?: () => void,
        accessKey?: string,
        isWide?: boolean,
        icon?: InputIconType,
        hasAutoFocus?: boolean,
        className?: string,

        // for custom data
        additional?: any,
    }

    export interface ButtonComponentPropsType {
        title: JSX.Element | Array<JSX.Element> | string,
        type: FormButtonTypeNameType,
        isPrimary?: boolean,
        onClick?: () => void,
        accessKey?: string,
        isWide?: boolean,
        icon?: InputIconType,
        hasAutoFocus?: boolean,
        className?: string,

        // for custom data
        additional?: any,
    }

    export interface FormPropsType {
        title: JSX.Element | Array<JSX.Element> | string,
        fieldSetList: Array<FormFieldSetType>,
        onSubmit: (formData: FormDataType) => void,
        onError: (errorList: Array<Error>, formData: FormDataType) => void,
        buttonComponent: React.FC<ButtonComponentPropsType>,
        buttonList: Array<FormButtonType>,
        className?: string,
    }

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
