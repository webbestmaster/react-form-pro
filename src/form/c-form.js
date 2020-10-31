// @flow

import React, {type Node, useCallback, useEffect, useState} from 'react';

import {Spinner} from '../layout/spinner/c-spinner';
import {IsRender} from '../layout/is-render/c-is-render';

import formStyle from './form.scss';
import type {FormPropsType} from './form-type';

type PropsType = FormPropsType;

type StateType = {};

export function Form(props: PropsType): Node {
    return <h1>Form!</h1>;
}
