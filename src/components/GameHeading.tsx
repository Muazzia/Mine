import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGetPlatformFromId from "../hooks/useGetPlatformFromId";
import useGetGenreFromId from "../hooks/useGetGenreFromId";
import useAppStore from "../store";

const GameHeading = () => {
  const genre = useAppStore((s) => s.gameQuery.genre);
  const platform = useAppStore((s) => s.gameQuery.platform);

  const platformName = useGetPlatformFromId(platform);
  const genreName = useGetGenreFromId(genre);
  const heading = `${platformName?.name || ""} ${genreName?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
