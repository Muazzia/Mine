import { Box, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import useScreenShot from "../hooks/useScreenShot";

interface Porps {
  id: number;
}

const GameScreenShot = ({ id }: Porps) => {
  const { data, isLoading, error } = useScreenShot(id);
  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} marginX={10} gap={3}>
      {data?.results.map((g) => (
        <Image src={g.image} key={g.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShot;
