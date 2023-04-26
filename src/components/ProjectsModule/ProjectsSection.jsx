import {
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import projects from "../../data/projects";
import Project from "./Project";

export default function ProjectsSection() {
  const shouldAlternate = useBreakpointValue({ base: false, md: true });
  return (
    <Grid gridTemplateColumns={"1fr"} justifyContent="center">
      {projects.map((project, index) => (
        <Project
          key={project.name}
          index={index}
          shouldAlternate={shouldAlternate}
          {...project}
        />
      ))}
    </Grid>
  );
}
