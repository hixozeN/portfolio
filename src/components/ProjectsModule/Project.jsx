import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react'
import { Fade } from 'react-awesome-reveal';
import ProjectContent from './ProjectContent';

const Project = ({ index, shouldAlternate, ...props }) => (
  <Fade>
    <Grid
      gridTemplateColumns={`${shouldAlternate ? "repeat(2, 1fr)" : "1fr"}`}
      alignItems="center"
      style={{ minHeight: "60vh", width: "100%" }}
      gap={10}
      mt={10}
    >
      <GridItem>
        <ProjectContent
          alternate={shouldAlternate ? index % 2 === 0 : false}
          {...props}
        />
      </GridItem>
      <GridItem>
        <ProjectContent
          alternate={shouldAlternate ? index % 2 === 1 : true}
          {...props}
        />
      </GridItem>
    </Grid>
  </Fade>
);

export default Project