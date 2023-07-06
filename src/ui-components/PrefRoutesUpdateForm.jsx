/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { PrefRoutes } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function PrefRoutesUpdateForm(props) {
  const {
    id: idProp,
    prefRoutes: prefRoutesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    origin: "",
    route: [],
    destination: "",
    type: "",
    area: "",
    altitude: "",
    aircraft: "",
    direction: "",
    seq: "",
    DCNTR: "",
    ACNTR: "",
  };
  const [origin, setOrigin] = React.useState(initialValues.origin);
  const [route, setRoute] = React.useState(initialValues.route);
  const [destination, setDestination] = React.useState(
    initialValues.destination
  );
  const [type, setType] = React.useState(initialValues.type);
  const [area, setArea] = React.useState(initialValues.area);
  const [altitude, setAltitude] = React.useState(initialValues.altitude);
  const [aircraft, setAircraft] = React.useState(initialValues.aircraft);
  const [direction, setDirection] = React.useState(initialValues.direction);
  const [seq, setSeq] = React.useState(initialValues.seq);
  const [DCNTR, setDCNTR] = React.useState(initialValues.DCNTR);
  const [ACNTR, setACNTR] = React.useState(initialValues.ACNTR);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = prefRoutesRecord
      ? { ...initialValues, ...prefRoutesRecord }
      : initialValues;
    setOrigin(cleanValues.origin);
    setRoute(cleanValues.route ?? []);
    setCurrentRouteValue("");
    setDestination(cleanValues.destination);
    setType(cleanValues.type);
    setArea(cleanValues.area);
    setAltitude(cleanValues.altitude);
    setAircraft(cleanValues.aircraft);
    setDirection(cleanValues.direction);
    setSeq(cleanValues.seq);
    setDCNTR(cleanValues.DCNTR);
    setACNTR(cleanValues.ACNTR);
    setErrors({});
  };
  const [prefRoutesRecord, setPrefRoutesRecord] =
    React.useState(prefRoutesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(PrefRoutes, idProp)
        : prefRoutesModelProp;
      setPrefRoutesRecord(record);
    };
    queryData();
  }, [idProp, prefRoutesModelProp]);
  React.useEffect(resetStateValues, [prefRoutesRecord]);
  const [currentRouteValue, setCurrentRouteValue] = React.useState("");
  const routeRef = React.createRef();
  const validations = {
    origin: [{ type: "Required" }],
    route: [{ type: "Required" }],
    destination: [{ type: "Required" }],
    type: [],
    area: [],
    altitude: [],
    aircraft: [],
    direction: [],
    seq: [{ type: "Required" }],
    DCNTR: [],
    ACNTR: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          origin,
          route,
          destination,
          type,
          area,
          altitude,
          aircraft,
          direction,
          seq,
          DCNTR,
          ACNTR,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            PrefRoutes.copyOf(prefRoutesRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PrefRoutesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Origin"
        isRequired={true}
        isReadOnly={false}
        value={origin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              origin: value,
              route,
              destination,
              type,
              area,
              altitude,
              aircraft,
              direction,
              seq,
              DCNTR,
              ACNTR,
            };
            const result = onChange(modelFields);
            value = result?.origin ?? value;
          }
          if (errors.origin?.hasError) {
            runValidationTasks("origin", value);
          }
          setOrigin(value);
        }}
        onBlur={() => runValidationTasks("origin", origin)}
        errorMessage={errors.origin?.errorMessage}
        hasError={errors.origin?.hasError}
        {...getOverrideProps(overrides, "origin")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              origin,
              route: values,
              destination,
              type,
              area,
              altitude,
              aircraft,
              direction,
              seq,
              DCNTR,
              ACNTR,
            };
            const result = onChange(modelFields);
            values = result?.route ?? values;
          }
          setRoute(values);
          setCurrentRouteValue("");
        }}
        currentFieldValue={currentRouteValue}
        label={"Route"}
        items={route}
        hasError={errors?.route?.hasError}
        errorMessage={errors?.route?.errorMessage}
        setFieldValue={setCurrentRouteValue}
        inputFieldRef={routeRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Route"
          isRequired={true}
          isReadOnly={false}
          value={currentRouteValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.route?.hasError) {
              runValidationTasks("route", value);
            }
            setCurrentRouteValue(value);
          }}
          onBlur={() => runValidationTasks("route", currentRouteValue)}
          errorMessage={errors.route?.errorMessage}
          hasError={errors.route?.hasError}
          ref={routeRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "route")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Destination"
        isRequired={true}
        isReadOnly={false}
        value={destination}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              origin,
              route,
              destination: value,
              type,
              area,
              altitude,
              aircraft,
              direction,
              seq,
              DCNTR,
              ACNTR,
            };
            const result = onChange(modelFields);
            value = result?.destination ?? value;
          }
          if (errors.destination?.hasError) {
            runValidationTasks("destination", value);
          }
          setDestination(value);
        }}
        onBlur={() => runValidationTasks("destination", destination)}
        errorMessage={errors.destination?.errorMessage}
        hasError={errors.destination?.hasError}
        {...getOverrideProps(overrides, "destination")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              origin,
              route,
              destination,
              type: value,
              area,
              altitude,
              aircraft,
              direction,
              seq,
              DCNTR,
              ACNTR,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Area"
        isRequired={false}
        isReadOnly={false}
        value={area}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              origin,
              route,
              destination,
              type,
              area: value,
              altitude,
              aircraft,
              direction,
              seq,
              DCNTR,
              ACNTR,
            };
            const result = onChange(modelFields);
            value = result?.area ?? value;
          }
          if (errors.area?.hasError) {
            runValidationTasks("area", value);
          }
          setArea(value);
        }}
        onBlur={() => runValidationTasks("area", area)}
        errorMessage={errors.area?.errorMessage}
        hasError={errors.area?.hasError}
        {...getOverrideProps(overrides, "area")}
      ></TextField>
      <TextField
        label="Altitude"
        isRequired={false}
        isReadOnly={false}
        value={altitude}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              origin,
              route,
              destination,
              type,
              area,
              altitude: value,
              aircraft,
              direction,
              seq,
              DCNTR,
              ACNTR,
            };
            const result = onChange(modelFields);
            value = result?.altitude ?? value;
          }
          if (errors.altitude?.hasError) {
            runValidationTasks("altitude", value);
          }
          setAltitude(value);
        }}
        onBlur={() => runValidationTasks("altitude", altitude)}
        errorMessage={errors.altitude?.errorMessage}
        hasError={errors.altitude?.hasError}
        {...getOverrideProps(overrides, "altitude")}
      ></TextField>
      <TextField
        label="Aircraft"
        isRequired={false}
        isReadOnly={false}
        value={aircraft}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              origin,
              route,
              destination,
              type,
              area,
              altitude,
              aircraft: value,
              direction,
              seq,
              DCNTR,
              ACNTR,
            };
            const result = onChange(modelFields);
            value = result?.aircraft ?? value;
          }
          if (errors.aircraft?.hasError) {
            runValidationTasks("aircraft", value);
          }
          setAircraft(value);
        }}
        onBlur={() => runValidationTasks("aircraft", aircraft)}
        errorMessage={errors.aircraft?.errorMessage}
        hasError={errors.aircraft?.hasError}
        {...getOverrideProps(overrides, "aircraft")}
      ></TextField>
      <TextField
        label="Direction"
        isRequired={false}
        isReadOnly={false}
        value={direction}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              origin,
              route,
              destination,
              type,
              area,
              altitude,
              aircraft,
              direction: value,
              seq,
              DCNTR,
              ACNTR,
            };
            const result = onChange(modelFields);
            value = result?.direction ?? value;
          }
          if (errors.direction?.hasError) {
            runValidationTasks("direction", value);
          }
          setDirection(value);
        }}
        onBlur={() => runValidationTasks("direction", direction)}
        errorMessage={errors.direction?.errorMessage}
        hasError={errors.direction?.hasError}
        {...getOverrideProps(overrides, "direction")}
      ></TextField>
      <TextField
        label="Seq"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={seq}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              origin,
              route,
              destination,
              type,
              area,
              altitude,
              aircraft,
              direction,
              seq: value,
              DCNTR,
              ACNTR,
            };
            const result = onChange(modelFields);
            value = result?.seq ?? value;
          }
          if (errors.seq?.hasError) {
            runValidationTasks("seq", value);
          }
          setSeq(value);
        }}
        onBlur={() => runValidationTasks("seq", seq)}
        errorMessage={errors.seq?.errorMessage}
        hasError={errors.seq?.hasError}
        {...getOverrideProps(overrides, "seq")}
      ></TextField>
      <TextField
        label="Dcntr"
        isRequired={false}
        isReadOnly={false}
        value={DCNTR}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              origin,
              route,
              destination,
              type,
              area,
              altitude,
              aircraft,
              direction,
              seq,
              DCNTR: value,
              ACNTR,
            };
            const result = onChange(modelFields);
            value = result?.DCNTR ?? value;
          }
          if (errors.DCNTR?.hasError) {
            runValidationTasks("DCNTR", value);
          }
          setDCNTR(value);
        }}
        onBlur={() => runValidationTasks("DCNTR", DCNTR)}
        errorMessage={errors.DCNTR?.errorMessage}
        hasError={errors.DCNTR?.hasError}
        {...getOverrideProps(overrides, "DCNTR")}
      ></TextField>
      <TextField
        label="Acntr"
        isRequired={false}
        isReadOnly={false}
        value={ACNTR}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              origin,
              route,
              destination,
              type,
              area,
              altitude,
              aircraft,
              direction,
              seq,
              DCNTR,
              ACNTR: value,
            };
            const result = onChange(modelFields);
            value = result?.ACNTR ?? value;
          }
          if (errors.ACNTR?.hasError) {
            runValidationTasks("ACNTR", value);
          }
          setACNTR(value);
        }}
        onBlur={() => runValidationTasks("ACNTR", ACNTR)}
        errorMessage={errors.ACNTR?.errorMessage}
        hasError={errors.ACNTR?.hasError}
        {...getOverrideProps(overrides, "ACNTR")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || prefRoutesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || prefRoutesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
