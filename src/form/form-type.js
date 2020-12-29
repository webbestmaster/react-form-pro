// @flow

export type FormPrimitiveInputValueType = string | number | boolean | null | File;

export type FormInputValueType = FormPrimitiveInputValueType | Array<FormPrimitiveInputValueType>;

export type FormDataType = {+[key: string]: FormInputValueType};

export type FormValidationType = {+[key: string]: Array<Error>};

export type InputComponentOnChangeType = (value: FormInputValueType) => void;

export type FormValidateType = (name: string, value: FormInputValueType, formData: FormDataType) => Array<Error>;

export type InputComponentOptionType = {|
    +title: React$Node,
    +value: string | number,
|};

type InputIconType = {|
    +src?: string,
|};

export type InputComponentPropsType = {|
    +name: string,
    +onChange: InputComponentOnChangeType,
    +onBlur: InputComponentOnChangeType,
    +errorList: Array<Error>,
    +defaultValue: FormInputValueType,
    +placeholder: React$Node,
    +label: React$Node,
    +isRequired?: boolean,
    +isWide?: boolean,
    +icon?: InputIconType,
    +hasAutoFocus?: boolean,

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
    +inputComponent: React$ComponentType<InputComponentPropsType>,
    +validate: FormValidateType,
    +defaultValue: FormInputValueType,
    +placeholder: React$Node,
    +label: React$Node,
    +isRequired?: boolean,
    +isWide?: boolean,
    +icon?: InputIconType,
    +hasAutoFocus?: boolean,

    // use as attribute "accept"
    +accept?: string,

    // use for select
    +optionList?: Array<InputComponentOptionType>,

    +isHidden?: boolean,

    // for custom data
    +additional?: mixed,
|};

/*
export type ShapeFieldDataType = {|
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

export type FormFieldSetType = {|
    +legend?: React$Node,
    +inputList: Array<FieldDataType>,
|};

export type FormButtonTypeNameType = 'button' | 'submit' | 'reset';

export type FormButtonType = {|
    +title: React$Node,
    +type: FormButtonTypeNameType,
    +isPrimary?: boolean,
    +onClick?: () => void,
    +accessKey?: string,
    +isWide?: boolean,
    +icon?: InputIconType,
    +hasAutoFocus?: boolean,

    // for custom data
    additional?: mixed,
|};

export type ButtonComponentPropsType = {|
    +title: React$Node,
    +type: FormButtonTypeNameType,
    +isPrimary?: boolean,
    +onClick?: () => void,
    +accessKey?: string,
    +isWide?: boolean,
    +icon?: InputIconType,
    +hasAutoFocus?: boolean,

    // for custom data
    +additional?: mixed,
|};

export type FormPropsType = {|
    +title: React$Node,
    +fieldSetList: Array<FormFieldSetType>,
    +onSubmit: (formData: FormDataType) => void,
    +onError: (errorList: Array<Error>, formData: FormDataType) => void,
    +buttonComponent: React$ComponentType<ButtonComponentPropsType>,
    +buttonList: Array<FormButtonType>,
    +className?: string,
|};
