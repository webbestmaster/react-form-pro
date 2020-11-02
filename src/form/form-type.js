// @flow

import type {Node} from 'react';

export type FromPrimitiveInputValueType = string | number | boolean | null | File;

export type FromInputValueType = FromPrimitiveInputValueType | Array<FromPrimitiveInputValueType>;

export type FormDataType = {+[key: string]: FromInputValueType};

export type FormValidationType = {+[key: string]: Array<Error>};

export type InputComponentOnChangeType = (value: FromInputValueType) => void;

export type FormValidateType = (name: string, value: FromInputValueType, formData: FormDataType) => Array<Error>;

export type InputComponentPropsType = {|
    +name: string,
    +onChange: InputComponentOnChangeType,
    +onBlur: InputComponentOnChangeType,
    +errorList: Array<Error>,
    +defaultValue: FromInputValueType,
    +placeholder: Node,
    +label: Node,
|};

declare export type InputComponentOptionType = {|
    +title: string | number,
    +value: string | number,
|};

export type FieldDataType = {|
    +name: string,
    // eslint-disable-next-line id-match
    +inputComponent: React$ComponentType<InputComponentPropsType>,
    +validate: FormValidateType,
    +defaultValue: FromInputValueType,
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
|};

export type FormPropsType = {|
    +title: Node,
    +fieldSetList: Array<FormFieldSetType>,
    +onSubmit: (formData: FormDataType) => mixed,
    +onError: (errorList: Array<Error>, formData: FormDataType) => mixed,
    +buttonList: Array<FormButtonType>,
|};
