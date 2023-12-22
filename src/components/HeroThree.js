import { Flex, Text, Heading, Link, Icon } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
const HeroThree = () => {
  return (
    <>
      <Flex
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        m="3"
        w="full"
        h="300px"
        p="7"
        wrap="wrap"
        backdropFilter="saturate(180%) blur(10px)"

      >
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          p="5"
          borderBottom="1px"
          shadow="lg"
          borderColor="purple.200"
        >
          <Heading as="h2" fontSize="4xl">
            Find Me On
          </Heading>
          <Text fontSize={{ lg: "2xl", base: "xl" }} mt="4">
            Feel free to Connect with me
          </Text>
          <Flex mt="4" direction="row" gap="10">
            <Link href="https://github.com/Nazimkhan1212" target="_blank" >
              <Icon as={BsGithub} w="8" h="8" />
            </Link>
            <Link href="https://www.linkedin.com/in/nazim-khan-953aa41b9/" target="_blank" >
              <Icon as={BsLinkedin} w="8" h="8" />
            </Link>
            <Link href="/" >
              <Icon as={BsInstagram} w="8" h="8" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default HeroThree;
