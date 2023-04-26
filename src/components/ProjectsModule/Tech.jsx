import { Text, Flex } from "@chakra-ui/react";
import React from "react";

const Tech = ({ tech }) => (
  <Flex gap='2' justifyContent='flex-start' ml={4}>
    {tech.map((item, index) => (
        <Text key={`${item}-${index}`} as="kbd">
          {item}
        </Text>
    ))}
  </Flex>
);

export default Tech;
