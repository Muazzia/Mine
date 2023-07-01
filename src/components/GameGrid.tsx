import { SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import useAppStore from "../store";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import { Link } from "react-router-dom";

const GameGrid = () => {
  const gameQuery = useAppStore((s) => s.gameQuery);
  const { data, error, isLoading, fetchNextPage, isFetching, hasNextPage } =
    useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  const totalFetchesGames =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  if (error) return <p>{"adsf"}</p>;

  // <Text>{error.message}</Text>
  return (
    <>
      <InfiniteScroll
        dataLength={totalFetchesGames}
        next={() => fetchNextPage()}
        hasMore={hasNextPage ? true : false}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          padding="10px"
          spacing={6}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}

          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <Link to={`/games/${game.id}`} key={game.id}>
                  <GameCardContainer>
                    <GameCard game={game} />
                  </GameCardContainer>
                </Link>
              ))}
            </React.Fragment>
          ))}
          {/* {data?.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))} */}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
