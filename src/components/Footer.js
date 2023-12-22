import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Flex p="5" as="footer" justifyContent="center">
        <Text>Copyright © {new Date().getFullYear()} </Text>
      </Flex>
    </>
  );
};

export default Footer;
