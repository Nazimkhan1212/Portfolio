import { Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <>
      <Text fontSize={{ lg: "5xl", base: "3xl" }}>
        <Typewriter
          options={{
            strings: ["Developer", "React Lover", "Javascript Enjoyer"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
          fontSize="4xl"
        />
      </Text>
    </>
  );
};

export default Type;
