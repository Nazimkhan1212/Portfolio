import { Flex, Heading, Box, Image, Text } from "@chakra-ui/react";

const HeroTwo = () => {
  return (
    <>
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt="10"
        w="full"
        h="auto"
        gap="20"
        wrap="wrap"
        borderBottom="1px"
        shadow="lg"
        borderColor="purple.200"
        p="10"
        backdropFilter="saturate(180%) blur(10px)"

      >
        <Flex p="10" direction="row" gap="20" wrap="wrap">
          <Flex direction="column" justifyContent="center">
            <Heading
              textShadow="1px 1px purple"
              mt="3"
              mb="5"
              as="h2"
              fontSize={{ lg: "5xl", base: "3xl" }}
              fontWeight="medium"
            >
              Let me Introduce Myself
            </Heading>

            <Text
              fontSize={{ lg: "3xl", base: "2xl" }}
              fontWeight="medium"
              mt="3"
              mb="5"
            >
              Passed Out B.E (Computer Engineering) in 2021
            </Text>
            <Text
              fontSize={{ lg: "3xl", base: "2xl" }}
              fontWeight="medium"
              mt="3"
              mb="5"
            >
              An aspiring developer who loves to take on new projects that
              <br />
              challenges his analytical and technological capacities
            </Text>
            <Text
              fontSize={{ lg: "3xl", base: "2xl" }}
              fontWeight="medium"
              mt="3"
              mb="5"
            >
              I am fluent
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                Javascript
              </span>
              developer.
            </Text>
            <Text
              fontSize={{ lg: "3xl", base: "2xl" }}
              fontWeight="medium"
              mt="3"
              mb="5"
            >
              My field of Interest's are building new Web Applications and
              Products
            </Text>
            <Text
              fontSize={{ lg: "3xl", base: "2xl" }}
              fontWeight="medium"
              mt="3"
              mb="5"
            >
              Whenever possible, I apply my passion for developing products with
              <br />
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                Node.js
              </span>
              and
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                }}
              >
                Modern Javascript Library{" "}
              </span>
              and Frameworks like<span> React.js</span>
              <br />
              and
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                }}
              >
                Redux
              </span>
            </Text>
          </Flex>
          {/* <Box>
            <Image
              rounded="full"
              src="profile2.jpg"
              objectFit="cover"
              w={{ lg: "400px", md: "300px", base: "300px" }}
            />
          </Box> */}
        </Flex>
      </Flex>
    </>
  );
};

export default HeroTwo;
