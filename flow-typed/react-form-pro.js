// @flow

declare module 'react-form-pro' {
    declare export type FromPrimitiveInputValueType = string | number | boolean | null | File;

    declare export type FromInputValueType = FromPrimitiveInputValueType | Array<FromPrimitiveInputValueType>;

    declare export type FormDataType = {+[key: string]: FromInputValueType};

    declare export type FormValidationType = {+[key: string]: Array<Error>};

    declare export type InputComponentOnChangeType = (value: FromInputValueType) => void;

    declare export type FormValidateType = (
        name: string,
        value: FromInputValueType,
        formData: FormDataType,
    ) => Array<Error>;

    declare export type InputComponentPropsType = {|
        +name: string,
        +onChange: InputComponentOnChangeType,
        +onBlur: InputComponentOnChangeType,
        +errorList: Array<Error>,
        +defaultValue: FromInputValueType,
        // eslint-disable-next-line id-match
        +placeholder: React$Node,
        // eslint-disable-next-line id-match
        +label: React$Node,
    |};

    declare export type FieldDataType = {|
        +name: string,
        // eslint-disable-next-line id-match
        +inputComponent: React$ComponentType<InputComponentPropsType>,
        +validate: FormValidateType,
        +defaultValue: FromInputValueType,
        // eslint-disable-next-line id-match
        +placeholder: React$Node,
        // eslint-disable-next-line id-match
        +label: React$Node,
        +isHidden?: boolean,
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
    |};

    declare export type FormPropsType = {|
        // eslint-disable-next-line id-match
        +title: React$Node,
        +fieldSetList: Array<FormFieldSetType>,
        +onSubmit: (formData: FormDataType) => mixed,
        +onError: (errorList: Array<Error>, formData: FormDataType) => mixed,
        +buttonList: Array<FormButtonType>,
    |};

    // eslint-disable-next-line id-match
    declare export var Form: React$ComponentType<FormPropsType>;

    declare export var formButtonTypeName: {+[key: FormButtonTypeNameType]: FormButtonTypeNameType};
}

declare module 'react-form-pro/dist/style.css' {
    declare type StyleType = {};

    declare var style: StyleType;

    declare export default typeof style;
}
