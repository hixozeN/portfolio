import React from "react";

import ExperienceContent from "../../components/ExperienceModule/ExperienceContent";
import SectionContainer from "../../components/SectionContainer/SectionContainer";

export default function Experience() {
  return (
    <SectionContainer
      id="experience"
      name="experience"
      headerText="Опыт"
      useHeaderStyle
      height="70vh"
      paddingTop="10%"
    >
      <ExperienceContent />
    </SectionContainer>
  );
}
