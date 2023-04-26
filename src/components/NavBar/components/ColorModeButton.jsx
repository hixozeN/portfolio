import { IconButton, Tooltip, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeButton = ({ mr }) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue("темную", "светлую");
  return (
    <Tooltip
      label={`Включить ${nextMode} тему`}
      aria-label={`Включить ${nextMode} тему`}
    >
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Включить ${nextMode} тему`}
        variant="ghost"
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        style={{ marginRight: mr }}
      />
    </Tooltip>
  );
};

export default ColorModeButton;
