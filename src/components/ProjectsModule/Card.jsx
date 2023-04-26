import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import LinkIconBar from "../UI/LinkIconBar";
import Tech from "./Tech";
import { colors } from "../../theme";

const Card = ({ name, subtitle, description, links, tech }) => {
  const bg = useColorModeValue(colors.bg.light, colors.bg.dark);
  return (
    <>
      <Box
        bgColor={bg}
        borderRadius="lg"
        borderWidth={bg === colors.bg.light ? "1px" : ""}
        rounded="md"
        shadow="lg"
        mt={0}
        m="auto"
        mb={3}
        w="75%"
        textAlign="start"
      >
        <Heading as="h1" size="lg" m={2} p={2} pt={6}>
          {name}
        </Heading>
        <Text hidden={!subtitle} size="sm" as="strong" m={2} p={2} pb={6}>
          {subtitle}
        </Text>
        <Text m={2} p={2} pb={6}>
          {description}
        </Text>
        <LinkIconBar
          links={links}
          justifyContent="flex-end"
          mt={0}
          mr={4}
          mb={5}
        />
      </Box>
      <Flex justifyContent="center" mt={-2}>
        <Tech tech={tech} />
      </Flex>
    </>
  );
};

export default Card;
