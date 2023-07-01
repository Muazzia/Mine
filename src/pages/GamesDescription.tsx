import React from "react";
import { useParams } from "react-router-dom";
import useGames from "../hooks/useGames";
import { Game } from "../entities/Game";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import ApiClient, { api } from "../services/api-client";
import axios from "axios";
import useGameDescription from "../hooks/useGameDescription";

const GamesDescription = () => {
  const params = useParams();
  const slug = params.slug || "";
  // const api = new ApiClient<GameDescriptionProps>(`/games/${params.id}`);
  const { data: game, isLoading, error } = useGameDescription(slug);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </>
  );
};

export default GamesDescription;
