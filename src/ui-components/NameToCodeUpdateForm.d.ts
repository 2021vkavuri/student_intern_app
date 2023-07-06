/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NameToCode } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NameToCodeUpdateFormInputValues = {
    placeId?: string;
    code?: string;
};
export declare type NameToCodeUpdateFormValidationValues = {
    placeId?: ValidationFunction<string>;
    code?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NameToCodeUpdateFormOverridesProps = {
    NameToCodeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    placeId?: PrimitiveOverrideProps<TextFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NameToCodeUpdateFormProps = React.PropsWithChildren<{
    overrides?: NameToCodeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    nameToCode?: NameToCode;
    onSubmit?: (fields: NameToCodeUpdateFormInputValues) => NameToCodeUpdateFormInputValues;
    onSuccess?: (fields: NameToCodeUpdateFormInputValues) => void;
    onError?: (fields: NameToCodeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NameToCodeUpdateFormInputValues) => NameToCodeUpdateFormInputValues;
    onValidate?: NameToCodeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NameToCodeUpdateForm(props: NameToCodeUpdateFormProps): React.ReactElement;
