import {
  Badge,
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameDesDetails from "../components/GameDesDetails";
import useGameDescription from "../hooks/useGameDescription";
import CriticScore from "../components/CriticScore";
import Trailer from "../components/Trailer";
import GameScreenShot from "../components/GameScreenShot";

const GamesDescription = () => {
  const params = useParams();
  const slug = params.slug || "";

  const { data: game, isLoading, error } = useGameDescription(slug);
  // const api = new ApiClient<GameDescriptionProps>(`/games/${params.id}`);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
      <Box>
        <Heading>{game?.name}</Heading>
        <ExpandableText children={game?.description_raw || ""} />
        <Grid templateColumns={"1fr 1fr"} marginX={3} as={"dl"} gap={3}>
          <GridItem>
            <GameDesDetails heading="Platforms">
              {game?.parent_platforms.map((p) => (
                <Text key={p.platform.id}>{p.platform.name}</Text>
              ))}
            </GameDesDetails>
          </GridItem>
          <GridItem>
            <GameDesDetails heading="MetricCount">
              <CriticScore score={game?.metacritic || 0} />
            </GameDesDetails>
          </GridItem>
          <GridItem>
            <GameDesDetails heading="Genres">
              {game?.genres.map((g) => (
                <Text key={g.id}>{g.name}</Text>
              ))}
            </GameDesDetails>
          </GridItem>
          <GridItem>
            <GameDesDetails heading="Publishers">
              {game?.publishers.map((p) => (
                <Text key={p.id}>{p.name}</Text>
              ))}
            </GameDesDetails>
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <Trailer id={game.id} />
        <GameScreenShot id={game.id} />
      </Box>
    </SimpleGrid>
  );
};

export default GamesDescription;
