// @flow

import {type FormButtonTypeNameType} from './form-type';

export const formButtonTypeName: {+[key: FormButtonTypeNameType]: FormButtonTypeNameType} = {
    button: 'button',
    submit: 'submit',
    reset: 'reset',
};

export const style = {
    hidden: {display: 'none'},
};
