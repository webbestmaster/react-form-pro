// @flow

import type {Node} from 'react';

export type FormPrimitiveInputValueType = string | number | boolean | null | File;

export type FormInputValueType = FormPrimitiveInputValueType | Array<FormPrimitiveInputValueType>;

export type FormDataType = {+[key: string]: FormInputValueType};

export type FormValidationType = {+[key: string]: Array<Error>};

export type InputComponentOnChangeType = (value: FormInputValueType) => void;

export type FormValidateType = (name: string, value: FormInputValueType, formData: FormDataType) => Array<Error>;

export type InputComponentOptionType = {|
    +title: string | number,
    +value: string | number,
|};

export type InputComponentPropsType = {|
    +name: string,
    +onChange: InputComponentOnChangeType,
    +onBlur: InputComponentOnChangeType,
    +errorList: Array<Error>,
    +defaultValue: FormInputValueType,
    +placeholder: Node,
    +label: Node,

    // use as attribute "accept"
    +accept?: string,

    // use for select
    +optionList?: Array<InputComponentOptionType>,

    +isHidden?: boolean,

    // for custom data
    +additional?: mixed,
|};

export type FieldDataType = {|
    +name: string,
    // eslint-disable-next-line id-match
    +inputComponent: React$ComponentType<InputComponentPropsType>,
    +validate: FormValidateType,
    +defaultValue: FormInputValueType,
    +placeholder: Node,
    +label: Node,

    // use as attribute "accept"
    +accept?: string,

    // use for select
    +optionList?: Array<InputComponentOptionType>,

    +isHidden?: boolean,

    // for custom data
    +additional?: mixed,
|};

export type ShapeFieldDataType = {|
    +name?: string,
    // eslint-disable-next-line id-match
    +inputComponent?: React$ComponentType<InputComponentPropsType>,
    +validate?: FormValidateType,
    +defaultValue?: FormInputValueType,
    +placeholder?: Node,
    +label?: Node,

    // use as attribute "accept"
    +accept?: string,

    // use for select
    +optionList?: Array<InputComponentOptionType>,

    +isHidden?: boolean,

    // for custom data
    +additional?: mixed,
|};

export type FormFieldSetType = {|
    +legend?: Node,
    +inputList: Array<FieldDataType>,
|};

export type FormButtonTypeNameType = 'button' | 'submit' | 'reset';

export type FormButtonType = {|
    +title: Node,
    +type: FormButtonTypeNameType,
    +isPrimary?: boolean,
    +onClick?: () => void,
    +accessKey?: string,

    // for custom data
    additional?: mixed,
|};

export type ButtonComponentPropsType = {|
    +title: Node,
    +type: FormButtonTypeNameType,
    +isPrimary?: boolean,
    +onClick?: () => void,
    +accessKey?: string,

    // for custom data
    +additional?: mixed,
|};

export type FormPropsType = {|
    +title: Node,
    +fieldSetList: Array<FormFieldSetType>,
    +onSubmit: (formData: FormDataType) => void,
    +onError: (errorList: Array<Error>, formData: FormDataType) => void,
    // eslint-disable-next-line id-match
    +buttonComponent: React$ComponentType<ButtonComponentPropsType>,
    +buttonList: Array<FormButtonType>,
    +className?: string,
|};
