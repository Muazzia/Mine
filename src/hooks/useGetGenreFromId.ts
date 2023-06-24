import useGenres from "./useGenres";

const useGetGenreFromId = (id: number | null) => {
  const { data: genre } = useGenres();
  return genre?.results.find((genre) => genre.id === id);
};

export default useGetGenreFromId;
