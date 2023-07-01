import React from "react";
import { useParams } from "react-router-dom";
import useGames, { Game } from "../hooks/useGames";
import { Heading, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import ApiClient, { api } from "../services/api-client";
import axios from "axios";
import useGameDescription from "../hooks/useGameDescription";

const GamesDescription = () => {
  const params = useParams();
  const id = params.id || "";
  // const api = new ApiClient<GameDescriptionProps>(`/games/${params.id}`);
  const { data: game } = useGameDescription(parseInt(id));

  return (
    <>
      <Heading>{game?.data.name}</Heading>
      <Text>{game?.data.description}</Text>
    </>
  );
};

export default GamesDescription;
