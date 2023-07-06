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
export declare type InputDataCreateFormInputValues = {
    origin?: string;
    destination?: string;
    type?: string;
};
export declare type InputDataCreateFormValidationValues = {
    origin?: ValidationFunction<string>;
    destination?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InputDataCreateFormOverridesProps = {
    InputDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    origin?: PrimitiveOverrideProps<TextFieldProps>;
    destination?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type InputDataCreateFormProps = React.PropsWithChildren<{
    overrides?: InputDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InputDataCreateFormInputValues) => InputDataCreateFormInputValues;
    onSuccess?: (fields: InputDataCreateFormInputValues) => void;
    onError?: (fields: InputDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InputDataCreateFormInputValues) => InputDataCreateFormInputValues;
    onValidate?: InputDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function InputDataCreateForm(props: InputDataCreateFormProps): React.ReactElement;
