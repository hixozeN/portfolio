import {
  SimpleGrid,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import { colors } from "../../theme";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import Photo from "../../components/AboutModule/Photo";
import Biography from "../../components/AboutModule/Biography";

export default function About() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  return (
    <SectionContainer
      id="about"
      name="about"
      headerMt="-5%"
      headerText="Обо мне"
      useHeaderStyle
    >
      <SimpleGrid
        pl="10%"
        pt="5%"
        pr="10%"
        spacing={5}
        columns={[1, 2]}
        justifyContent="center"
      >
        {shouldAlternate ? <Biography secondary={secondary} /> : <Photo />}
        {shouldAlternate ? <Photo /> : <Biography secondary={secondary} />}
      </SimpleGrid>
    </SectionContainer>
  );
}
