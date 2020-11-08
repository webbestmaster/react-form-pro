// @flow

declare module 'react-form-pro' {
    declare export type FormPrimitiveInputValueType = string | number | boolean | null | File;

    declare export type FormInputValueType = FormPrimitiveInputValueType | Array<FormPrimitiveInputValueType>;

    declare export type FormDataType = {+[key: string]: FormInputValueType};

    declare export type FormValidationType = {+[key: string]: Array<Error>};

    declare export type InputComponentOnChangeType = (value: FormInputValueType) => void;

    declare export type FormValidateType = (
        name: string,
        value: FormInputValueType,
        formData: FormDataType,
    ) => Array<Error>;

    declare export type InputComponentOptionType = {|
        +title: string | number,
        +value: string | number,
    |};

    declare export type InputComponentPropsType = {|
        +name: string,
        +onChange: InputComponentOnChangeType,
        +onBlur: InputComponentOnChangeType,
        +errorList: Array<Error>,
        +defaultValue: FormInputValueType,
        // eslint-disable-next-line id-match
        +placeholder: React$Node,
        // eslint-disable-next-line id-match
        +label: React$Node,

        // use as attribute "accept"
        +accept?: string,

        // use for select
        +optionList?: Array<InputComponentOptionType>,

        +isHidden?: boolean,

        // for custom data
        +additional?: mixed,
    |};

    declare export type FieldDataType = {|
        +name: string,
        // eslint-disable-next-line id-match
        +inputComponent: React$ComponentType<InputComponentPropsType>,
        +validate: FormValidateType,
        +defaultValue: FormInputValueType,
        // eslint-disable-next-line id-match
        +placeholder: React$Node,
        // eslint-disable-next-line id-match
        +label: React$Node,

        // use as attribute "accept"
        +accept?: string,

        // use for select
        +optionList?: Array<InputComponentOptionType>,

        +isHidden?: boolean,

        // for custom data
        +additional?: mixed,
    |};

    declare export type ShapeFieldDataType = {|
        +name?: string,
        // eslint-disable-next-line id-match
        +inputComponent?: React$ComponentType<InputComponentPropsType>,
        +validate?: FormValidateType,
        +defaultValue?: FormInputValueType,
        // eslint-disable-next-line id-match
        +placeholder?: React$Node,
        // eslint-disable-next-line id-match
        +label?: React$Node,

        // use as attribute "accept"
        +accept?: string,

        // use for select
        +optionList?: Array<InputComponentOptionType>,

        +isHidden?: boolean,

        // for custom data
        +additional?: mixed,
    |};

    declare export type FormFieldSetType = {|
        // eslint-disable-next-line id-match
        +legend?: React$Node,
        +inputList: Array<FieldDataType>,
    |};

    declare export type FormButtonTypeNameType = 'button' | 'submit' | 'reset';

    declare export type FormButtonType = {|
        // eslint-disable-next-line id-match
        +title: React$Node,
        +type: FormButtonTypeNameType,
        +isPrimary?: boolean,
        +onClick?: () => void,
        +accessKey?: string,

        // for custom data
        +additional?: mixed,
    |};

    declare export type ButtonComponentPropsType = {|
        // eslint-disable-next-line id-match
        +title: React$Node,
        +type: FormButtonTypeNameType,
        +isPrimary?: boolean,
        +onClick?: () => void,
        +accessKey?: string,

        // for custom data
        +additional?: mixed,
    |};

    declare export type FormPropsType = {|
        // eslint-disable-next-line id-match
        +title: React$Node,
        +fieldSetList: Array<FormFieldSetType>,
        +onSubmit: (formData: FormDataType) => void,
        +onError: (errorList: Array<Error>, formData: FormDataType) => void,
        // eslint-disable-next-line id-match
        +buttonComponent: React$ComponentType<ButtonComponentPropsType>,
        +buttonList: Array<FormButtonType>,
        +className?: string,
    |};

    // eslint-disable-next-line id-match
    declare export var Form: React$ComponentType<FormPropsType>;

    declare export var formButtonTypeName: {+[key: FormButtonTypeNameType]: FormButtonTypeNameType};

    declare export function noValidate(name: string, value: FormInputValueType, formData: FormDataType): Array<Error>;
    declare export function validateRequired(
        name: string,
        value: FormInputValueType,
        formData: FormDataType,
    ): Array<Error>;
}

declare module 'react-form-pro/dist/style.css' {
    declare type StyleType = {};

    declare var style: StyleType;

    declare export default typeof style;
}
