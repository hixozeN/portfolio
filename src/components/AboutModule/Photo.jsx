import { GridItem, Image } from '@chakra-ui/react';
import React from 'react'

const Photo = () => (
  <GridItem>
    <Image
      m="auto"
      src="./me.jpg"
      alt="Фотография разработчика сайта в лесу"
      zIndex={1}
      className="image"
      onClick={() => {
        window.open("https://github.com/hixozeN");
      }}
    />
  </GridItem>
);

export default Photo