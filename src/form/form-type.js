// @flow

import type {Node} from 'react';

// import type {SnackbarContextType} from '../../provider/snackbar/snackbar-context-type';
// import type {PopupContextType} from '../../provider/popup/popup-context-type';

export type FromPrimitiveInputValueType = string | number | boolean | null | File;

export type FromGeneratorInputValueType = FromPrimitiveInputValueType | Array<FromPrimitiveInputValueType>;

export type FormDataType = {+[key: string]: FromGeneratorInputValueType};

export type FormValidationType = {+[key: string]: Array<Error>};

export type InputComponentOnChangeType = (value: FromGeneratorInputValueType) => mixed;

export type ValidateType = (name: string, value: FromGeneratorInputValueType, formData: FormDataType) => Array<Error>;

export type FieldAutocompleteDataType = {|
    +header: string,
    +value: string,
|};

export type InputComponentPropsType = {|
    +name: string,
    +onChange: InputComponentOnChangeType,
    +onBlur: InputComponentOnChangeType,
    +errorList: Array<Error>,
    +defaultValue: FromGeneratorInputValueType,
    +placeholder: Node,
    +label: Node,
|};

export type FieldDataType = {|
    +name: string,
    // eslint-disable-next-line id-match
    +fieldComponent: React$ComponentType<InputComponentPropsType>,
    +validate: ValidateType,
    +defaultValue: FromGeneratorInputValueType,
    +placeholder: Node,
    +label: Node,
    +isHidden?: boolean,
|};

export type FieldSetWrapperDataType = {
    +children: Node,
    +legend: Node,
};

export type FormFieldSetType = {|
    +name: string,
    +inputList: Array<FieldDataType>,

    /*
    +fieldSetWrapper: {|
        // eslint-disable-next-line id-match
        +component: React$ComponentType<FieldSetWrapperDataType>,
        +legend: Node,
    |},
*/
|};

export type FormGeneratorImportedFieldDataType = {[key: string]: $Shape<FieldDataType>};

export type FormButtonTypeNameType = 'button' | 'submit' | 'reset';

export type FormButtonType = {|
    +title: Node,
    +type: FormButtonTypeNameType,
    +isPrimary?: boolean,
    +onClick?: () => void,
|};

export type FormGeneratorPropsType = {|
    +fieldSetList: Array<FormFieldSetType>,
    +onSubmit: (formData: FormDataType) => mixed,
    +onError: (errorList: Array<Error>, formData: FormDataType) => mixed,
    +buttonList: Array<FormButtonType>,
|};
