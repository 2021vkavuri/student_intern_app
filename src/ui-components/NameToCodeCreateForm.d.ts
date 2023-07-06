/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NameToCodeCreateFormInputValues = {
    placeId?: string;
    code?: string;
};
export declare type NameToCodeCreateFormValidationValues = {
    placeId?: ValidationFunction<string>;
    code?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NameToCodeCreateFormOverridesProps = {
    NameToCodeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    placeId?: PrimitiveOverrideProps<TextFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NameToCodeCreateFormProps = React.PropsWithChildren<{
    overrides?: NameToCodeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NameToCodeCreateFormInputValues) => NameToCodeCreateFormInputValues;
    onSuccess?: (fields: NameToCodeCreateFormInputValues) => void;
    onError?: (fields: NameToCodeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NameToCodeCreateFormInputValues) => NameToCodeCreateFormInputValues;
    onValidate?: NameToCodeCreateFormValidationValues;
} & React.CSSProperties>;
export default function NameToCodeCreateForm(props: NameToCodeCreateFormProps): React.ReactElement;
