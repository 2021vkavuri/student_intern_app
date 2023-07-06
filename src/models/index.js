// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Type = {
  "TEC": "TEC",
  "H": "H",
  "L": "L",
  "HSD": "HSD",
  "NAR": "NAR",
  "SHD": "SHD",
  "SLD": "SLD"
};

const { Route, InputData, NameToCode, PrefRoutes } = initSchema(schema);

export {
  Route,
  InputData,
  NameToCode,
  PrefRoutes,
  Type
};