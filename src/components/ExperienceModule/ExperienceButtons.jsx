import React from 'react'
import jobs from "../../data/jobs";
import { Button, Grid } from '@chakra-ui/react';

const ExperienceButtons = ({ expIndex, setIndex }) => (
  <Grid justifyContent="center" gap="3">
    {jobs.map((job, index) => (
      <Grid key={`${job.workplace}-btn`}>
        <Button isActive={expIndex === index} onClick={() => setIndex(index)}>
          {job.workplace}
        </Button>
      </Grid>
    ))}
  </Grid>
);

export default ExperienceButtons