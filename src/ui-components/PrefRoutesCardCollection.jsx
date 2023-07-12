/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { PrefRoutes } from "../models";
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import PrefRoutesCard from "./PrefRoutesCard";
import { Collection } from "@aws-amplify/ui-react";
export default function PrefRoutesCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = {
    and: [
      { field: "origin", operator: "eq", operand: "ABE" },
      { field: "destination", operator: "eq", operand: "FRG" },
      { field: "type", operator: "eq", operand: "TEC" },
    ],
  };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: PrefRoutes,
    criteria: itemsFilter,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          Routes: await item.Routes.toArray(),
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={6}
      templateColumns="1fr 1fr 1fr"
      autoFlow="row"
      alignItems="top"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "PrefRoutesCardCollection")}
      {...rest}
    >
        {(item, index) => (
        <PrefRoutesCard
          height="auto"
          width="auto"
          margin="4px 4px 4px 4px"
          inputData={item}
          route={item}
          key={item.id}
          //modifyFilters = {() => console.log(item.id)}
          {...(overrideItems && overrideItems({ item, index }))}
        ></PrefRoutesCard>
      )}
    </Collection>
  );
}