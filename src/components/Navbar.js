import {
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import changeTheme from "../actions/colorActions";

import { Link as RouterLink } from "react-router-dom";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.colorMode);

  const changeColor = () => {
    toggleColorMode();
    dispatch(changeTheme(colorMode));
  };

  return (
    <>
      {colorMode === "light" ? (
        <Icon onClick={changeColor} as={BsFillMoonFill} w="4" h="4" />
      ) : (
        <Icon onClick={changeColor} as={BsFillSunFill} w="4" h="4" />
      )}
    </>
  );
}
const Navbar = () => {
  return (
    <>
      <Flex
        shadow="md"
        position="fixed"
        zIndex="sticky"
        w="full"
        borderBottom="2px"
        borderColor="purple"
        as="header"
        justifyContent="space-between"
        alignItems="center"
        p="4"
        direction={{ lg: "row", md: "column", base: "column" }}
        backdropFilter="saturate(180%) blur(10px)"
      >
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" _hover={{ textDecor: "none" }}>
            <Heading
              ml={{ lg: "226px", md: "200px", base: "0" }}
              as="h2"
              fontSize="3xl"
              textShadow="1px 1px purple"
            >
              NazimKhan
            </Heading>
          </Link>
        </Flex>

        <Flex mt="3" alignItems="center" gap="6" justifyContent="space-evenly">
          <Link as={RouterLink} to="/about" fontSize="xl" fontWeight="bold">
            About
          </Link>
          <Link as={RouterLink} to="/projects" fontSize="xl" fontWeight="bold">
            Projects
          </Link>
          <Link as={RouterLink} to="/resume" fontSize="xl" fontWeight="bold">
            Resume
          </Link>
          <DarkMode />
        </Flex>
        <Box
          mr={{ lg: "163px", md: "140px", base: "0" }}
          display={{ lg: "block", md: "none", base: "none" }}
        >
          <Flex
            alignItems="center"
            gap="1"
            justifyContent="space-evenly"
            direction="row"
          >
            <Link href="https://github.com/Nazimkhan1212" target="_blank" >
              <Icon as={BsGithub} w="4" h="4" mx="2" />
            </Link>
            <Link href="https://www.linkedin.com/in/nazim-khan-953aa41b9/" target="_blank" >
              <Icon as={BsLinkedin} w="4" h="4" mx="2" />
            </Link>
            <Link href="/" >
              <Icon as={BsInstagram} w="4" h="4" mx="2" />
            </Link>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
