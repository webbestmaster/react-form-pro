// @flow

import {hasProperty} from '../lib/is';

import type {
    FieldDataType,
    FormFieldSetType,
    FormDataType,
    FormGeneratorImportedFieldDataType,
    FormGeneratorPropsType,
} from './form-type';

export function extendFieldList(
    inputList: Array<FieldDataType>,
    importedFieldData: FormGeneratorImportedFieldDataType
): Array<FieldDataType> {
    return inputList.map((fieldItem: FieldDataType): FieldDataType => {
        const {name} = fieldItem;
        const importedItem = hasProperty(importedFieldData, name) ? importedFieldData[name] : null;

        if (importedItem === null) {
            return {...fieldItem};
        }

        return {...fieldItem, ...importedItem};
    });
}

export function getDefaultFormData(arrivedProps: FormGeneratorPropsType): FormDataType {
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
