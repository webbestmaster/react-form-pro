// @flow

/* global fetch */

import React, {type Node} from 'react';

import {Form} from '../../../../src/form';

import {Markdown} from '../layout/c-markdown';

import appExampleMd from './app-example.md';

export function App(): Node {
    return (
        <div className="example-wrapper">
            <Form/>
        </div>
    );
}
