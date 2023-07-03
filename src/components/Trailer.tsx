import { Center } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailer";

interface Props {
  id: number;
}

const Trailer = ({ id }: Props) => {
  const { data } = useTrailer(id);

  const first = data?.results[0];
  if (!first) return null;

  return (
    <Center marginY={5}>
      <video
        src={first?.data[480]}
        poster={first?.preview}
        controls
        height={"300"}
        width={"1000"}
      />
    </Center>
  );
};

export default Trailer;
