import React from "react";
import { Stack } from "@chakra-ui/react";
import LinkIcon from "./LinkIcon";

const LinkIconBar = ({ links, color, onHoverColor, ...props }) => {
  return (
    <Stack
      mt={4}
      direction="row"
      spacing="12px"
      justify="center"
      mb={10}
      {...props}
    >
      {links.map((link, index) => (
        <LinkIcon
          key={link.label}
          index={index}
          {...link}
        />
      ))}
    </Stack>
  );
};

export default LinkIconBar;
