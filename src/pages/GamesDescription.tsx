import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGames from "../hooks/useGames";
import { Game } from "../entities/Game";
import { Button, Heading, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import ApiClient, { api } from "../services/api-client";
import axios from "axios";
import useGameDescription from "../hooks/useGameDescription";
import { create } from "zustand";
import ExpandableText from "../components/ExpandableText";

const GamesDescription = () => {
  const params = useParams();
  const slug = params.slug || "";

  const { data: game, isLoading, error } = useGameDescription(slug);
  // const api = new ApiClient<GameDescriptionProps>(`/games/${params.id}`);

  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText children={game?.description_raw || ""} />
    </>
  );
};

export default GamesDescription;
