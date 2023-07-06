/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PrefRoutesCardProps } from "./PrefRoutesCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrefRoutesCardCollectionOverridesProps = {
    PrefRoutesCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    PrefRoutesCard?: PrefRoutesCardProps;
} & EscapeHatchProps;
export declare type PrefRoutesCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => PrefRoutesCardProps;
} & {
    overrides?: PrefRoutesCardCollectionOverridesProps | undefined | null;
}>;
export default function PrefRoutesCardCollection(props: PrefRoutesCardCollectionProps): React.ReactElement;
