import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [show, setShow] = useState(false);

  let des;
  if (show) des = children;
  else des = children.substring(0, 300) + "...";
  return (
    <Text>
      {des}
      <Button onClick={() => setShow(!show)} margin={2}>
        {show ? "show less" : "show more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
