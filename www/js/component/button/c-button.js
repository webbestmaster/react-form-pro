// @flow

import React, {Component, type Node} from 'react';

import {isString} from '../../../../src/lib/is';

import type {ButtonComponentPropsType} from '../../../../src/form/form-type';

import buttonStyle from './button.scss';

type PropsType = ButtonComponentPropsType;

export function Button(props: PropsType): Node {
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
