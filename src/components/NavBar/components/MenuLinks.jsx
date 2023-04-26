import { Stack } from '@chakra-ui/react'
import React from 'react'
import NavButtons from './NavButtons'
import ColorModeButton from './ColorModeButton';

const MenuLinks = ({ onClose }) => (
  <Stack
    display={{ base: "none", sm: "none", md: "block" }}
    width={{ sm: "full", md: "auto" }}
    spacing="24px"
    direction={["column", "row", "row", "row"]}
    alignItems="center"
  >
    <NavButtons size="sm" onClose={onClose} />
    <ColorModeButton mr="12px" />
  </Stack>
);

export default MenuLinks