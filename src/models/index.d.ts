import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum Type {
  TEC = "TEC",
  H = "H",
  L = "L",
  HSD = "HSD",
  NAR = "NAR",
  SHD = "SHD",
  SLD = "SLD"
}



type EagerRoute = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Route, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly prefroutesID: string;
  readonly route?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRoute = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Route, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly prefroutesID: string;
  readonly route?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Route = LazyLoading extends LazyLoadingDisabled ? EagerRoute : LazyRoute

export declare const Route: (new (init: ModelInit<Route>) => Route) & {
  copyOf(source: Route, mutator: (draft: MutableModel<Route>) => MutableModel<Route> | void): Route;
}

type EagerInputData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<InputData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly origin?: string | null;
  readonly destination?: string | null;
  readonly type?: Type | keyof typeof Type | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInputData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<InputData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly origin?: string | null;
  readonly destination?: string | null;
  readonly type?: Type | keyof typeof Type | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type InputData = LazyLoading extends LazyLoadingDisabled ? EagerInputData : LazyInputData

export declare const InputData: (new (init: ModelInit<InputData>) => InputData) & {
  copyOf(source: InputData, mutator: (draft: MutableModel<InputData>) => MutableModel<InputData> | void): InputData;
}

type EagerNameToCode = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NameToCode, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly placeId: string;
  readonly code: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNameToCode = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NameToCode, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly placeId: string;
  readonly code: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NameToCode = LazyLoading extends LazyLoadingDisabled ? EagerNameToCode : LazyNameToCode

export declare const NameToCode: (new (init: ModelInit<NameToCode>) => NameToCode) & {
  copyOf(source: NameToCode, mutator: (draft: MutableModel<NameToCode>) => MutableModel<NameToCode> | void): NameToCode;
}

type EagerPrefRoutes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PrefRoutes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly origin: string;
  readonly route?: string[] | null;
  readonly destination: string;
  readonly type?: string | null;
  readonly area?: string | null;
  readonly altitude?: string | null;
  readonly aircraft?: string | null;
  readonly direction?: string | null;
  readonly seq: number;
  readonly DCNTR?: string | null;
  readonly ACNTR?: string | null;
  readonly Routes?: (Route | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPrefRoutes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PrefRoutes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly origin: string;
  readonly route?: string[] | null;
  readonly destination: string;
  readonly type?: string | null;
  readonly area?: string | null;
  readonly altitude?: string | null;
  readonly aircraft?: string | null;
  readonly direction?: string | null;
  readonly seq: number;
  readonly DCNTR?: string | null;
  readonly ACNTR?: string | null;
  readonly Routes: AsyncCollection<Route>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PrefRoutes = LazyLoading extends LazyLoadingDisabled ? EagerPrefRoutes : LazyPrefRoutes

export declare const PrefRoutes: (new (init: ModelInit<PrefRoutes>) => PrefRoutes) & {
  copyOf(source: PrefRoutes, mutator: (draft: MutableModel<PrefRoutes>) => MutableModel<PrefRoutes> | void): PrefRoutes;
}