import {
  Grid,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
  Link
} from "@chakra-ui/react";
import React from "react";
import { colors } from "../../theme/index";
import jobs from "../../data/jobs";


const ExperienceDetails = ({ index }) => {
  const job = jobs[index];
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  return (
    <Grid templateColumns="repeate(5, 1fr)">
      <Grid style={{ margin: "12px" }}>
        <Heading as="h1" size="lg">
          {job.position} [
          <Link href={job.url} isExternal color={secondary}>
            {job.workplace}
          </Link>
          ]
        </Heading>
      </Grid>
      <Grid style={{ marginLeft: "12px" }}>
        {job.duration.map((duration) => (
          <Grid key={duration}>
            <Text mt={2} fontSize='16px'>{duration}</Text>
          </Grid>
        ))}
      </Grid>
      <Grid style={{ marginLeft: "12px", marginBottom: "12px" }}>
        <UnorderedList mt={2}>
          {job.description.map((desc) => (
            <ListItem key={desc} fontSize='20px'>{desc}</ListItem>
          ))}
        </UnorderedList>
      </Grid>
    </Grid>
  );
};

export default ExperienceDetails;
