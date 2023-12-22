import {
  Flex,
  Text,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import {
  DiJavascript1,
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiReact,
  DiMongodb,
} from "react-icons/di";
import {
  SiRedux,
  SiChakraui,
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { Card } from "../components/Card";
import GitHubCalendar from "react-github-calendar";
import Particle from "../components/Particles";

const AboutScreen = () => {
  const skill = [
    { skill: "JavaScript", ic: DiJavascript1 },
    { skill: "Node js", ic: DiNodejs },
    { skill: "React js", ic: DiReact },
    { skill: "Mongo DB", ic: DiMongodb },
    { skill: "Redux", ic: SiRedux },
    { skill: "HTML", ic: DiHtml5 },
    { skill: "CSS", ic: DiCss3 },
    { skill: "Chakra UI", ic: SiChakraui },
  ];

  const tools = [
    { skill: "VsCode", ic: SiVisualstudiocode },
    { skill: "PostMan", ic: SiPostman },
    { skill: "Figma", ic: SiFigma },
    { skill: "Git", ic: AiFillGithub },
  ];
  return (
    <>
      <Particle />

      <Flex
        w="full"
        mt="85px"
        justifyContent="center"
        alignItems="center"
        py="10"
        wrap="wrap"
        direction="column"
        zIndex="100"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          wrap="wrap"
          gap="10"
          borderBottom="2px"
          borderColor="purple.800"
          shadow="lg"
          mt="10"
          backdropFilter="saturate(180%) blur(10px)"
        >
          <Flex mx="10" direction="column">
            <Heading
              as="h2"
              fontWeight="medium"
              fontSize={{ lg: "5xl", base: "3xl" }}
            >
              Know who
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                I'M
              </span>
            </Heading>
            <Text
              fontSize={{ lg: "2xl", base: "xl" }}
              fontWeight="medium"
              mt="3"
              mb="2"
            >
              Hello every one, I am{" "}
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                Nazim Khan{" "}
              </span>
              , <br /> born and broughtup in Mumbai, India
            </Text>
            <Text
              fontSize={{ lg: "2xl", base: "xl" }}
              fontWeight="medium"
              mt="3"
              mb="2"
            >
              I completed my{" "}
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                B.E in Computer Engineering
              </span>{" "}
              from <br /> Anjuman Islam Kalsekar Technical Campus in 2021
            </Text>
            <Text
              fontSize={{ lg: "2xl", base: "xl" }}
              fontWeight="medium"
              mt="3"
              mb="2"
            >
              Although I dont have any experience,
              <br /> i am fluent in{" "}
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                Javascript
              </span>{" "}
              and in{" "}
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                {" "}
                MERN stack
              </span>
            </Text>
            <Text
              fontSize={{ lg: "2xl", base: "xl" }}
              fontWeight="medium"
              mt="3"
              mb="2"
            >
              I did an offline Course in{" "}
              <span
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                {" "}
                Full Stack JavaScript Development
              </span>
            </Text>
            <Text
              fontSize={{ lg: "2xl", base: "xl" }}
              fontWeight="medium"
              mt="3"
              mb="2"
            >
              Apart From Coding here are thr things i Do:
            </Text>
            <List>
              <ListItem
                fontSize={{ lg: "2xl", base: "xl" }}
                fontWeight="medium"
                mt="3"
                mb="2"
              >
                Playing Football
              </ListItem>
              <ListItem
                fontSize={{ lg: "2xl", base: "xl" }}
                fontWeight="medium"
                mt="3"
                mb="2"
              >
                Video games
              </ListItem>
              <ListItem
                fontSize={{ lg: "2xl", base: "xl" }}
                fontWeight="medium"
                mt="3"
                mb="2"
              >
                Dedicated towards Fitness
              </ListItem>
            </List>
          </Flex>
          <Image mx="10" src="about.svg" w="300px" h="300px" />
        </Flex>

        <Flex
          mt="10"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h2" fontSize="5xl" fontWeight="bold">
            Professional{" "}
            <span
              style={{
                color: "purple",
                fontWeight: "bold",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            >
              {" "}
              Skillset
            </span>
          </Heading>
          <Flex
            p="10"
            direction="row"
            justifyContent="center"
            wrap="wrap"
            gap="20"
          >
            {skill.map((item) => (
              <Card ic={item.ic}>{item.skill}</Card>
            ))}
          </Flex>
        </Flex>

        <Flex
          mt="10"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h2" fontSize="5xl" fontWeight="bold">
            Tools{" "}
            <span
              style={{
                color: "purple",
                fontWeight: "bold",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            >
              {" "}
              I Use
            </span>
          </Heading>
          <Flex
            p="10"
            direction="row"
            justifyContent="center"
            wrap="wrap"
            gap="20"
          >
            {tools.map((item) => (
              <Card ic={item.ic}>{item.skill}</Card>
            ))}
          </Flex>
        </Flex>

        <Flex
          mt="10"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h2" fontSize="5xl" fontWeight="bold">
            Days{" "}
            <span
              style={{
                color: "purple",
                fontWeight: "bold",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            >
              {" "}
              I code
            </span>
          </Heading>
          <Flex
            p="10"
            direction="row"
            justifyContent="center"
            wrap="wrap"
            gap="20"
            backdropFilter="saturate(180%) blur(10px)"
          >
            <GitHubCalendar
              username="Nazimkhan1212"
              blockSize={15}
              blockMargin={5}
              fontSize={16}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default AboutScreen;
