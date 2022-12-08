import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';

import { ErrorMessage } from '../ErrorMessage';

interface InputWithTitleProps extends InputHTMLAttributes<HTMLInputElement> {
    fieldName: string;
    title?: string;
    placeHolder?: string;
    type?: HTMLInputTypeAttribute;
    left?: React.ReactNode | React.VFC<void>;
    right?: React.ReactNode | React.VFC<void>;
    onChange?: (value: any) => void;
}

const InputWithTitle = ({
    fieldName,
    title,
    type,
    placeHolder,
    left,
    right,
    onChange,
    ...rest
}: InputWithTitleProps) => {
    const {
        register,
        setValue,
        formState: { errors },
    } = useFormContext();

    const errorObject = errors[fieldName];

    return (
        <div className="flex flex-col">
            {title && <span className="font-semibold leading-10 text-sm">{title}</span>}
            <div
                className={classNames(
                    'flex flex-row border border-solid border-gray-25 gap-2.5 rounded-[5px]',
                    { 'border-gray-25': !!!errorObject },
                    { 'border-red-500': !!errorObject },
                    { 'px-4': !!(left && right) },
                    { 'pr-4': !!right },
                    { 'pl-4': !!left },
                )}
            >
                {left && (typeof left === 'function' ? left() : left)}
                <input
                    className={classNames(
                        'py-3 border-0 flex-[9] text-base min-w-0 rounded-[5px]',
                        { 'px-4': !!(!left && !right) },
                        { 'px-0': !!(left && right) },
                        { 'pl-4': !!right },
                        { 'pr-4': !!left },
                    )}
                    type={type}
                    placeholder={placeHolder}
                    {...register(fieldName)}
                    onChange={({ target: { value } }) => {
                        if (onChange) {
                            return onChange(value);
                        }

                        if (type === 'number') {
                            setValue(fieldName, Number(value), { shouldDirty: true });
                        } else {
                            setValue(fieldName, value, { shouldDirty: true });
                        }
                    }}
                    {...rest}
                />
                {right && (typeof right === 'function' ? right() : right)}
            </div>
            {errorObject && (
                <ErrorMessage
                    fieldName={fieldName}
                    message={errorObject.message as string}
                    type={errorObject.type as string}
                />
            )}
        </div>
    );
};

export { InputWithTitle };
