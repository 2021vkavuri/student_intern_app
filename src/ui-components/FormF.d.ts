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
export declare type FormFInputValues = {
    origin?: string;
    destination?: string;
    type?: string;
};
export declare type FormFValidationValues = {
    origin?: ValidationFunction<string>;
    destination?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormFOverridesProps = {
    FormFGrid?: PrimitiveOverrideProps<GridProps>;
    origin?: PrimitiveOverrideProps<TextFieldProps>;
    destination?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type FormFProps = React.PropsWithChildren<{
    overrides?: FormFOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FormFInputValues) => FormFInputValues;
    onSuccess?: (fields: FormFInputValues) => void;
    onError?: (fields: FormFInputValues, errorMessage: string) => void;
    onChange?: (fields: FormFInputValues) => FormFInputValues;
    onValidate?: FormFValidationValues;
} & React.CSSProperties>;
export default function FormF(props: FormFProps): React.ReactElement;
