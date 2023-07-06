/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PrefRoutes, Route } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RouteCardOverridesProps = {
    RouteCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    RTE?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type RouteCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    prefRoutes?: PrefRoutes;
    route?: Route;
} & {
    overrides?: RouteCardOverridesProps | undefined | null;
}>;
export default function RouteCard(props: RouteCardProps): React.ReactElement;
