import React from "react";
import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-scroll";
import links from "../../data/footerLinks";
import styles from "./Hello.module.css";
import { colors } from "../../theme";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import LinkIconBar from "../../components/UI/LinkIconBar";

export default function Hello() {
  const primary = useColorModeValue(colors.primary.dark, colors.primary.light);
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );

  const header = (
    <div className={styles.center}>
      <h1 className={styles.tagline} style={{ color: primary }}>
        Привет, я Владос,
      </h1>
      <h1 className={styles.tagline} style={{ color: primary }}>
        <strong style={{ color: secondary }}>frontend-разработчик.</strong>
      </h1>
    </div>
  );

  return (
    <SectionContainer id="hello" name="Приветствие" headerText={header}>
      <LinkIconBar links={links} />
      <Link
        activeClass="active"
        to="about"
        spy
        smooth
        offset={-70}
        duration={500}
      >
        <VStack>
          <Text
            as="strong"
            _hover={{ color: secondary }}
            className={styles.learn}
          >
            Узнать больше
            <BsChevronDown />
          </Text>
        </VStack>
      </Link>
    </SectionContainer>
  );
}
