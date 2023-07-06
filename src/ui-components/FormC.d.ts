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
export declare type FormCInputValues = {
    Field0?: string;
    Field1?: string;
    Field2?: string;
};
export declare type FormCValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormCOverridesProps = {
    FormCGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
    Field2?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type FormCProps = React.PropsWithChildren<{
    overrides?: FormCOverridesProps | undefined | null;
} & {
    onSubmit: (fields: FormCInputValues) => void;
    onChange?: (fields: FormCInputValues) => FormCInputValues;
    onValidate?: FormCValidationValues;
} & React.CSSProperties>;
export default function FormC(props: FormCProps): React.ReactElement;
