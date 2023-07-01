import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <NavBar />
      <Box marginX={3}>
        <Heading>OOps</Heading>
        <Text>
          {isRouteErrorResponse(err)
            ? "No page available"
            : "An unexpected error"}
        </Text>
      </Box>
    </>
  );
};

export default Error;
