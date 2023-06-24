import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genre } = useGenres();
  const { data: platform } = usePlatforms();

  const platformName = platform.results.find(
    (platform) => platform.id === gameQuery.platform
  );
  const genreName = genre.results.find((genre) => genre.id === gameQuery.genre);
  const heading = `${platformName?.name || ""} ${genreName?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
