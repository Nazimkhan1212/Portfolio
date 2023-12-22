import { Flex, Heading } from "@chakra-ui/react";
import { ProjectCard } from "../components/Card";
import Particle from "../components/Particles";

const ProjectsScreen = () => {
  return (
    <>
    <Particle/>
      <Flex
        w="full"
        direction="column"
        justifyContent="center"
        alignItems="center"
        mt="86px"
        py="10"
        zIndex="100"
      >
        <Flex
          mt="40px"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading
            as="h2"
            fontSize={{ lg: "5xl", base: "3xl" }}
            fontWeight="medium"
          >
            My Recent Projects
          </Heading>
        </Flex>
        <Flex direction="row" justifyContent="center" wrap="wrap">
          <ProjectCard
            source="https://pokemonviewer.netlify.app/"
            git="https://github.com/Nazimkhan1212/Pokemon-viewer"
            src="pokemon.png"
            desc="The App is Built in Vanilla Javascript. It Displays all the Pokemons available till date wiht the help of Poke Api."
          />
          <ProjectCard
            source="https://dresswell.cyclic.app/"
            git="https://github.com/Nazimkhan1212/dresswell"
            src="dresswell.png"
            desc="This is a Full Stack Javascript web App for ecommerce store "
          />{" "}
       
        </Flex>
      </Flex>
    </>
  );
};

export default ProjectsScreen;
