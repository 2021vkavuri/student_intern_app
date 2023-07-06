/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { InputData } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function InputDataUpdateForm(props) {
  const {
    id: idProp,
    inputData: inputDataModelProp,
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
    destination: "",
    type: "",
  };
  const [origin, setOrigin] = React.useState(initialValues.origin);
  const [destination, setDestination] = React.useState(
    initialValues.destination
  );
  const [type, setType] = React.useState(initialValues.type);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = inputDataRecord
      ? { ...initialValues, ...inputDataRecord }
      : initialValues;
    setOrigin(cleanValues.origin);
    setDestination(cleanValues.destination);
    setType(cleanValues.type);
    setErrors({});
  };
  const [inputDataRecord, setInputDataRecord] =
    React.useState(inputDataModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(InputData, idProp)
        : inputDataModelProp;
      setInputDataRecord(record);
    };
    queryData();
  }, [idProp, inputDataModelProp]);
  React.useEffect(resetStateValues, [inputDataRecord]);
  const validations = {
    origin: [],
    destination: [],
    type: [],
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
          destination,
          type,
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
            InputData.copyOf(inputDataRecord, (updated) => {
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
      {...getOverrideProps(overrides, "InputDataUpdateForm")}
      {...rest}
    >
      <TextField
        label="Origin"
        isRequired={false}
        isReadOnly={false}
        value={origin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              origin: value,
              destination,
              type,
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
      <TextField
        label="Destination"
        isRequired={false}
        isReadOnly={false}
        value={destination}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              origin,
              destination: value,
              type,
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
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              origin,
              destination,
              type: value,
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
      >
        <option
          children="Tec"
          value="TEC"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="H"
          value="H"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
        <option
          children="L"
          value="L"
          {...getOverrideProps(overrides, "typeoption2")}
        ></option>
        <option
          children="Hsd"
          value="HSD"
          {...getOverrideProps(overrides, "typeoption3")}
        ></option>
        <option
          children="Nar"
          value="NAR"
          {...getOverrideProps(overrides, "typeoption4")}
        ></option>
        <option
          children="Shd"
          value="SHD"
          {...getOverrideProps(overrides, "typeoption5")}
        ></option>
        <option
          children="Sld"
          value="SLD"
          {...getOverrideProps(overrides, "typeoption6")}
        ></option>
      </SelectField>
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
          isDisabled={!(idProp || inputDataModelProp)}
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
              !(idProp || inputDataModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
