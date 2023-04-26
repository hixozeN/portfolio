import { Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-awesome-reveal";

import styles from "./SectionContainer.module.css";

export default function SectionContainer({
  children,
  headerMt = "",
  headerText = "",
  useHeaderStyle = false,
  height = '90vh',
  paddingTop,
  ...props
}) {
  const color = useColorModeValue("secondary.light", "secondary.dark");
  return (
    <div className={styles.container} {...props} style={{minHeight: `${height}`, paddingTop: `${paddingTop}`}}>
      <Fade>
        <div className={styles.column}>
          <Text
            as="h1"
            color={color}
            mt={headerMt}
            className={useHeaderStyle ? styles.header : ""}
          >
            {headerText}
          </Text>
          {children}
        </div>
      </Fade>
    </div>
  );
}
