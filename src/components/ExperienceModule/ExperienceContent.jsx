import {
  useBreakpointValue,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ExperienceDetails from "./ExperienceDetails";
import ExperienceButtons from "./ExperienceButtons";
import ExperienceSelect from "./ExperienceSelect";

export default function ExperienceContent() {
  const [index, setIndex] = useState(0);
  const showSelect = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Grid
    maxWidth="80vw"
    minHeight='70vh'
    gridTemplateColumns={showSelect && '20vw 50vw'}
    >
      <Grid
        alignItems="start"
        justifyContent="end"
        style={{ marginTop: "44px", marginBottom: "24px", marginRight: "3vw" }}
      >
        <GridItem>
          {showSelect ? (
            <ExperienceButtons expIndex={index} setIndex={setIndex} />
          ) : (
            <ExperienceSelect expIndex={index} setIndex={setIndex} />
          )}
        </GridItem>
      </Grid>
      <Grid
        id="details"
        justifyContent='start'
        style={{ marginTop: "24px", marginBottom: "24px", marginLeft: "12px" }}
      >
        <GridItem>
          <ExperienceDetails index={index} />
        </GridItem>
      </Grid>
    </Grid>
  );
}
