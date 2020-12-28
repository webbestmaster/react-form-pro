// @flow

import React from 'react';

import type {ButtonComponentPropsType} from '../../../../src/form/form-type';

import buttonStyle from './button.scss';

type PropsType = ButtonComponentPropsType;

export function Button(props: PropsType): React$Node {
    const {accessKey, onClick, additional, isPrimary, title, type} = props;

    return (
        // eslint-disable-next-line react/button-has-type
        <button
            accessKey={accessKey || null}
            onClick={onClick}
            // eslint-disable-next-line react/button-has-type
            type={type}
        >
            custom button
            {title}
        </button>
    );
}
