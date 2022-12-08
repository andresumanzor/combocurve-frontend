import { ErrorMessages } from '@shared/static/FormElements';

export type ErrorProps = {
    fieldName: string;
    message?: string;
    type: string;
};

export const ErrorMessage = ({ fieldName, message, type }: ErrorProps) => {
    const { default: defaultErrors, ...errorsByField } = ErrorMessages;

    const errorMessagesByField = errorsByField[fieldName as keyof typeof errorsByField] || {};

    const errorMessage =
        errorMessagesByField[type as keyof typeof errorMessagesByField] ||
        defaultErrors[type as keyof typeof defaultErrors] ||
        message;

    return (
        <div className="flex items-center">
            <span className="font-normal text-sm text-red-500">{errorMessage}</span>
        </div>
    );
};
