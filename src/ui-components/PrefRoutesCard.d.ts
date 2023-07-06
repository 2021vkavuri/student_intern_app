/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PrefRoutes, Route } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrefRoutesCardOverridesProps = {
    PrefRoutesCard?: PrimitiveOverrideProps<FlexProps>;
    OriginToDestination?: PrimitiveOverrideProps<FlexProps>;
    ORI?: PrimitiveOverrideProps<TextProps>;
    TO?: PrimitiveOverrideProps<TextProps>;
    DES?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    Type?: PrimitiveOverrideProps<FlexProps>;
    "TYPE:"?: PrimitiveOverrideProps<TextProps>;
    TYP?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PrefRoutesCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    inputData?: PrefRoutes;
    route?: Route;
    routeDisplay?: React.ReactNode;
} & {
    overrides?: PrefRoutesCardOverridesProps | undefined | null;
}>;
export default function PrefRoutesCard(props: PrefRoutesCardProps): React.ReactElement;
