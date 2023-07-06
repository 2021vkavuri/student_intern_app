/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { InputData } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InputDataUpdateFormInputValues = {
    origin?: string;
    destination?: string;
    type?: string;
};
export declare type InputDataUpdateFormValidationValues = {
    origin?: ValidationFunction<string>;
    destination?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InputDataUpdateFormOverridesProps = {
    InputDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    origin?: PrimitiveOverrideProps<TextFieldProps>;
    destination?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type InputDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: InputDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    inputData?: InputData;
    onSubmit?: (fields: InputDataUpdateFormInputValues) => InputDataUpdateFormInputValues;
    onSuccess?: (fields: InputDataUpdateFormInputValues) => void;
    onError?: (fields: InputDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InputDataUpdateFormInputValues) => InputDataUpdateFormInputValues;
    onValidate?: InputDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InputDataUpdateForm(props: InputDataUpdateFormProps): React.ReactElement;
