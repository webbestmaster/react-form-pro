// @flow

import type {FieldDataType, FormDataType, FormFieldSetType, FormPropsType} from './form-type';

export function getDefaultFormData(arrivedProps: FormPropsType): FormDataType {
    const {fieldSetList} = arrivedProps;
    const defaultFormData = {};

    fieldSetList.forEach((fieldSetData: FormFieldSetType) => {
        const {inputList} = fieldSetData;

        inputList.forEach((fieldData: FieldDataType) => {
            const {name, defaultValue} = fieldData;

            defaultFormData[name] = defaultValue;
        });
    });

    return defaultFormData;
}
