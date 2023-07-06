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
export declare type NewForm1InputValues = {
    origin?: string;
    route?: string[];
    destination?: string;
    type?: string;
    area?: string;
    altitude?: string;
    aircraft?: string;
    direction?: string;
    seq?: number;
    DCNTR?: string;
    ACNTR?: string;
};
export declare type NewForm1ValidationValues = {
    origin?: ValidationFunction<string>;
    route?: ValidationFunction<string>;
    destination?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    area?: ValidationFunction<string>;
    altitude?: ValidationFunction<string>;
    aircraft?: ValidationFunction<string>;
    direction?: ValidationFunction<string>;
    seq?: ValidationFunction<number>;
    DCNTR?: ValidationFunction<string>;
    ACNTR?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewForm1OverridesProps = {
    NewForm1Grid?: PrimitiveOverrideProps<GridProps>;
    origin?: PrimitiveOverrideProps<TextFieldProps>;
    route?: PrimitiveOverrideProps<TextFieldProps>;
    destination?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    area?: PrimitiveOverrideProps<TextFieldProps>;
    altitude?: PrimitiveOverrideProps<TextFieldProps>;
    aircraft?: PrimitiveOverrideProps<TextFieldProps>;
    direction?: PrimitiveOverrideProps<TextFieldProps>;
    seq?: PrimitiveOverrideProps<TextFieldProps>;
    DCNTR?: PrimitiveOverrideProps<TextFieldProps>;
    ACNTR?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewForm1Props = React.PropsWithChildren<{
    overrides?: NewForm1OverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewForm1InputValues) => NewForm1InputValues;
    onSuccess?: (fields: NewForm1InputValues) => void;
    onError?: (fields: NewForm1InputValues, errorMessage: string) => void;
    onChange?: (fields: NewForm1InputValues) => NewForm1InputValues;
    onValidate?: NewForm1ValidationValues;
} & React.CSSProperties>;
export default function NewForm1(props: NewForm1Props): React.ReactElement;
