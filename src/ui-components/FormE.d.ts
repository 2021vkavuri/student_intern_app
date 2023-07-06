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
export declare type FormEInputValues = {
    origin?: string;
    destination?: string;
    type?: string;
};
export declare type FormEValidationValues = {
    origin?: ValidationFunction<string>;
    destination?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormEOverridesProps = {
    FormEGrid?: PrimitiveOverrideProps<GridProps>;
    origin?: PrimitiveOverrideProps<TextFieldProps>;
    destination?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type FormEProps = React.PropsWithChildren<{
    overrides?: FormEOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FormEInputValues) => FormEInputValues;
    onSuccess?: (fields: FormEInputValues) => void;
    onError?: (fields: FormEInputValues, errorMessage: string) => void;
    onChange?: (fields: FormEInputValues) => FormEInputValues;
    onValidate?: FormEValidationValues;
} & React.CSSProperties>;
export default function FormE(props: FormEProps): React.ReactElement;
