import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGetPlatformFromId from "../hooks/useGetPlatformFromId";
import useGetGenreFromId from "../hooks/useGetGenreFromId";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platformName = useGetPlatformFromId(gameQuery.platform);
  const genreName = useGetGenreFromId(gameQuery.genre);
  const heading = `${platformName?.name || ""} ${genreName?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
