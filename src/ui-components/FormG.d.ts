/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FormGInputValues = {
    origin?: string;
    destination?: string;
    type?: string;
};
export declare type FormGValidationValues = {
    origin?: ValidationFunction<string>;
    destination?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormGOverridesProps = {
    FormGGrid?: PrimitiveOverrideProps<GridProps>;
    origin?: PrimitiveOverrideProps<TextFieldProps>;
    destination?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type FormGProps = React.PropsWithChildren<{
    overrides?: FormGOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FormGInputValues) => FormGInputValues;
    onSuccess?: (fields: FormGInputValues) => void;
    onError?: (fields: FormGInputValues, errorMessage: string) => void;
    onChange?: (fields: FormGInputValues) => FormGInputValues;
    onValidate?: FormGValidationValues;
} & React.CSSProperties>;
export default function FormG(props: FormGProps): React.ReactElement;
