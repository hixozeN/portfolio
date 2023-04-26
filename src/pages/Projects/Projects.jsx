import React from "react";

import SectionContainer from "../../components/SectionContainer/SectionContainer";
import ProjectsSection from "../../components/ProjectsModule/ProjectsSection";

export default function Projects() {
  return (
    <SectionContainer
      id="projects"
      name="projects"
      headerText="Избранные проекты"
      useHeaderStyle
    >
      <ProjectsSection />
    </SectionContainer>
  );
}
