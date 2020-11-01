// @flow

import React, {type Node} from 'react';
import classNames from 'classnames';

import type {InputComponentPropsType} from '../../form-type';
import fieldStyle from '../field.scss';
import {isNumber} from '../../../lib/is';

import progressBarStyle from './progress-bar.scss';

type PropsType = InputComponentPropsType;

export function ProgressBar(props: PropsType): Node {
    const {name, onChange, errorList, defaultValue, placeholder, labelText} = props;

    if (!isNumber(defaultValue)) {
        console.error('ProgressBar: Number Support Only');
        return null;
    }

    return (
        <div className={fieldStyle.form__label_wrapper}>
            <span className={fieldStyle.form__label_description}>{labelText}</span>
            <div className={progressBarStyle.progress_bar__input}>
                <div className={progressBarStyle.progress_bar__line_wrapper}>
                    <span className={progressBarStyle.progress_bar__line_background}/>
                    <span
                        className={classNames(progressBarStyle.progress_bar__line, {
                            [progressBarStyle.progress_bar__line_error]: errorList.length > 0,
                        })}
                        style={{width: `${defaultValue}%`}}
                    />
                </div>
            </div>
            {/* <code>errorList: {errorList.map((error: Error): string => error.message)}</code>*/}
        </div>
    );
}
