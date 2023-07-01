import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../entities/Platform";
import axios from "axios";
import { api } from "../services/api-client";
import useGetPlatformFromId from "../hooks/useGetPlatformFromId";
import useAppStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const platform = useAppStore((s) => s.gameQuery.platform);
  const setPlatform = useAppStore((s) => s.setPlatform);

  const platformOfId = useGetPlatformFromId(platform);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformOfId?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem onClick={() => setPlatform(platform.id)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
