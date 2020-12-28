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
        +title: React$Node,
        +value: string | number,
    |};

    declare export type InputComponentPropsType = {|
        +name: string,
        +onChange: InputComponentOnChangeType,
        +onBlur: InputComponentOnChangeType,
        +errorList: Array<Error>,
        +defaultValue: FormInputValueType,
        +placeholder: React$Node,
        +label: React$Node,
        +isRequired?: boolean,
        +isWide?: boolean,

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
        +inputComponent: React$ComponentType<InputComponentPropsType>,
        +validate: FormValidateType,
        +defaultValue: FormInputValueType,
        +placeholder: React$Node,
        +label: React$Node,
        +isRequired?: boolean,
        +isWide?: boolean,

        // use as attribute "accept"
        +accept?: string,

        // use for select
        +optionList?: Array<InputComponentOptionType>,

        +isHidden?: boolean,

        // for custom data
        +additional?: mixed,
    |};

    /*
    declare export type ShapeFieldDataType = {|
        +name?: string,
        +inputComponent?: React$ComponentType<InputComponentPropsType>,
        +validate?: FormValidateType,
        +defaultValue?: FormInputValueType,
        +placeholder?: React$Node,
        +label?: React$Node,

        // use as attribute "accept"
        +accept?: string,

        // use for select
        +optionList?: Array<InputComponentOptionType>,

        +isHidden?: boolean,

        // for custom data
        +additional?: mixed,
    |};
*/

    declare export type FormFieldSetType = {|
        +legend?: React$Node,
        +inputList: Array<FieldDataType>,
    |};

    declare export type FormButtonTypeNameType = 'button' | 'submit' | 'reset';

    declare export type FormButtonType = {|
        +title: React$Node,
        +type: FormButtonTypeNameType,
        +isPrimary?: boolean,
        +onClick?: () => void,
        +accessKey?: string,
        +isWide?: boolean,

        // for custom data
        +additional?: mixed,
    |};

    declare export type ButtonComponentPropsType = {|
        +title: React$Node,
        +type: FormButtonTypeNameType,
        +isPrimary?: boolean,
        +onClick?: () => void,
        +accessKey?: string,
        +isWide?: boolean,

        // for custom data
        +additional?: mixed,
    |};

    declare export type FormPropsType = {|
        +title: React$Node,
        +fieldSetList: Array<FormFieldSetType>,
        +onSubmit: (formData: FormDataType) => void,
        +onError: (errorList: Array<Error>, formData: FormDataType) => void,
        +buttonComponent: React$ComponentType<ButtonComponentPropsType>,
        +buttonList: Array<FormButtonType>,
        +className?: string,
    |};

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
