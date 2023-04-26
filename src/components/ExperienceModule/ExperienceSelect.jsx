import { Select } from "@chakra-ui/react";
import React from "react";
import jobs from "../../data/jobs";

const ExperienceSelect = ({ expIndex, setIndex }) => (
  <Select value={expIndex} onChange={(e) => setIndex(e.target.value)}>
    {jobs.map((job, index) => (
      <option key={`${job.workplace}-select-option`} value={index}>
        {job.workplace}
      </option>
    ))}
  </Select>
);

export default ExperienceSelect;
