import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import { animateScroll as scroll } from "react-scroll";

const Logo = () => {
  return (
    <Box m="2" >
      <Text
        height='20'
        onClick={scroll.scrollToTop}
        style={{display: 'flex', alignItems: 'center', marginLeft: '25px', fontSize: '24px', cursor: 'pointer'}}
      >
        Портфолио hixozeN
      </Text>
    </Box>
  );
};

export default Logo