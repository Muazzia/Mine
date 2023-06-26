import { create } from "zustand";

export interface GameQuery {
  genre: number | null;
  platform: number | null;
  sortOrder: string;
  searchText: string;
}

interface AppStore {
  gameQuery: GameQuery;
  setGenre: (genreId: number) => void;
  setPlatform: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useAppStore = create<AppStore>((set) => ({
  gameQuery: {} as GameQuery,
  setGenre: (genreId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genre: genreId } })),
  setPlatform: (platformId: number) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platform: platformId },
    })),
  setSearchText: (searchText: string) =>
    set((store) => ({
      gameQuery: { genre: null, platform: null, sortOrder: "", searchText },
    })),
  setSortOrder: (sortOrder: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useAppStore;
