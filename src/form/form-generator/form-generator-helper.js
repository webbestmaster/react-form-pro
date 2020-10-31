// @flow

import {hasProperty} from '../../lib/is';

import type {
    FieldDataType,
    FieldSetDataType,
    FormGeneratorFormDataType,
    FormGeneratorImportedFieldDataType,
    FormGeneratorPropsType,
} from './form-generator-type';

export function extendFieldList(
    fieldList: Array<FieldDataType>,
    importedFieldData: FormGeneratorImportedFieldDataType
): Array<FieldDataType> {
    return fieldList.map((fieldItem: FieldDataType): FieldDataType => {
        const {name} = fieldItem;
        const importedItem = hasProperty(importedFieldData, name) ? importedFieldData[name] : null;

        if (importedItem === null) {
            return {...fieldItem};
        }

        return {...fieldItem, ...importedItem};
    });
}

export function getDefaultFormData(arrivedProps: FormGeneratorPropsType): FormGeneratorFormDataType {
    const {config} = arrivedProps;
    const {fieldSetList} = config;
    const defaultFormData = {};

    fieldSetList.forEach((fieldSetData: FieldSetDataType) => {
        const {fieldList} = fieldSetData;

        fieldList.forEach((fieldData: FieldDataType) => {
            const {name, defaultValue} = fieldData;

            defaultFormData[name] = defaultValue;
        });
    });

    return defaultFormData;
}