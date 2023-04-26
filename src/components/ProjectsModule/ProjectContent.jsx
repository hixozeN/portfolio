import React from "react";
import Card from "./Card";
import { Image } from "@chakra-ui/react";

const ProjectContent = ({
  alternate,
  name,
  subtitle,
  description,
  pic,
  tech,
  links,
}) => {
  if (alternate) {
    return (
      <>
        <Card
          name={name}
          subtitle={subtitle}
          description={description}
          links={links}
          tech={tech}
        />
      </>
    );
  }
  return (
    <Image
      m="auto"
      w="85%"
      p="auto"
      src={pic}
      alt={`${name} изображение`}
      className="image"
      onClick={() => {
        window.open(links[0].url);
      }}
    />
  );
};

export default ProjectContent;
