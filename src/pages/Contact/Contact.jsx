import {
  Button,
  Link,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";

import SectionContainer from "../../components/SectionContainer/SectionContainer";
import { BsTelegram } from "react-icons/bs";

const Contact = () => {
  return (
    <SectionContainer
      id="contact"
      name="contact"
      headerText="Связаться со мной"
      useHeaderStyle
      height="70vh"
    >
      <Grid alignItems="center" justifyContent="center">
        <GridItem>
          <Text fontSize="xl" textAlign="center" pt='10'>
            Хочешь предложить работу,
          </Text>
          <Text fontSize="xl" textAlign="center">
          позвать поучаствовать в совместной разработке
          </Text>
          <Text fontSize="xl" textAlign="center" pb='10'>
          или оставить фидбэк?
          </Text>
        </GridItem>
        <Button
          as={Link}
          leftIcon={<BsTelegram />}
          href="https://t.me/+79218619465"
          m="auto"
          mt={6}
        >
          Пиши в телегу :)
        </Button>
      </Grid>
    </SectionContainer>
  );
};

export default Contact;
