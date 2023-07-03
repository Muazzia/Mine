import { Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  heading: string;
  children: ReactNode | ReactNode[];
  //   des: string;
}

const GameDesDetails = ({ heading, children }: Props) => {
  return (
    <>
      <Heading as={"dt"} color={"gray.600"} fontSize={"md"}>
        {heading}
      </Heading>
      <dd>{children}</dd>
    </>
  );
};

export default GameDesDetails;
