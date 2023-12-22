import { Flex, Text, Image } from "@chakra-ui/react";
import Type from "./Type"

const HeroOne = () => {
  return <>
   <Flex
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        m="3"
        w="full"
        h={{lg:"500px",base:"700px"}}
        gap="20"
        p="7"
        wrap="wrap"
        borderBottom="1px"
        shadow="lg"
        borderColor="purple.200"
        backdropFilter="saturate(180%) blur(10px)"
        zIndex="20"


      >
        <Flex direction="column" justifyContent="flex-start" p="5">
          <Text as="h2" fontSize={{ lg: "5xl", base: "3xl" }} fontWeight="bold">
            Hi there,{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </Text>

          <Flex direction="row" gap="5" wrap="wrap">
            <Text
              as="h2"
              fontSize={{ lg: "5xl", base: "3xl" }}
              fontWeight="bold"
            >
              I'm <br />
              <span style={{ textShadow: "1px 1px purple" }}>
                Nazim Khan
              </span>
            </Text>
          </Flex>

          <Type />
        </Flex>
        <Flex>
          <Image
            src="home_image.svg"
            objectFit="cover"
            w={{ lg: "400px", md: "300px", base: "300px" }}
          />
        </Flex>
      </Flex></>;
};

export default HeroOne;
