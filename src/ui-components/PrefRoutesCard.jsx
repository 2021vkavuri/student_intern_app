/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function PrefRoutesCard(props) {
  const { inputData, route, routeDisplay, overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="227px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      padding="23px 23px 23px 23px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "PrefRoutesCard")}
      {...rest}
    >
      <Flex
        gap="21px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="11px 91px 11px 91px"
        {...getOverrideProps(overrides, "OriginToDestination")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="14px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="54px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={inputData?.origin}
          {...getOverrideProps(overrides, "ORI")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="14px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="20px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="TO"
          {...getOverrideProps(overrides, "TO")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="14px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="52px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={inputData?.destination}
          {...getOverrideProps(overrides, "DES")}
        ></Text>
      </Flex>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Route"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="15px 11px 15px 11px"
        {...getOverrideProps(overrides, "Type")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="14px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="41px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="TYPE:"
          {...getOverrideProps(overrides, "TYPE:")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="14px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="52px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={inputData?.type}
          {...getOverrideProps(overrides, "TYP")}
        ></Text>
      </Flex>
    </Flex>
  );
}
