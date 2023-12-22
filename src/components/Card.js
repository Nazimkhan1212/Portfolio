import { Flex, Heading, Icon, Link, Image, Text } from "@chakra-ui/react";

export const Card = ({ children, ic }) => {
  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        border="2px solid purple"
        borderColor="purple.900"
        p="9"
        shadow="3px 2px purple"
        _hover={{ shadow: "5px 5px 5px 5px purple" }}
        rounded="md"
        backdropFilter="saturate(180%) blur(10px)"
      >
        <Icon as={ic} my="3" w="20" h="20" />
        <Heading my="3" as="h3" fontSize="3xl">
          {children}
        </Heading>
      </Flex>
    </>
  );
};

export const ProjectCard = ({ desc, git, source, src }) => {
  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        borderColor="purple.900"
        p="3"
        shadow="lg"
        dropShadow="lg"
        shadowColor="purple"
        _hover={{ shadow: "5px 5px 5px 5px purple" }}
        rounded="md"
        mt="6"
        wrap="wrap"
        m="8"
        backdropFilter="saturate(180%) blur(10px)"
      >
        <Image
          my="8"
          w={{ lg: "500px", base: "200px" }}
          h={{ lg: "200px", base: "100px" }}
          objectFit="cover"
          src={src}
          alt={src}
        />
        <Text my="8">{desc}</Text>
        <Flex my="6" gap="10">
          <Link
            p="5"
            border="1px solid purple"
            rounded="md"
            shadow="md"
            _hover={{ textDecor: "none", bgColor: "purple.500" }}
            href={git}
            target="_blank"
          >
            Browse Code
          </Link>
          <Link
            p="5"
            border="1px solid purple"
            rounded="md"
            shadow="md"
            _hover={{ textDecor: "none", bgColor: "purple.500" }}
            href={source}
            target="_blank"
          >
            Live
          </Link>
        </Flex>
      </Flex>
    </>
  );
};
