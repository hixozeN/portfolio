import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import { animateScroll as scroll } from "react-scroll";
import LinkIconBar from "../UI/LinkIconBar";
import links from "../../data/footerLinks";

const GITHUB_URL = "https://github.com/hixozeN";

const Footer = () => {
  return (
    <Box as="footer" mt={12} height="100%" textAlign="center" className="app">
      <Link href={GITHUB_URL} isExternal>
        <Text fontSize="sm" as="u">
          Владислав Коляниченко &copy; {new Date().getFullYear()}
        </Text>
      </Link>

      <Text fontSize="sm" mt={2} onClick={scroll.scrollToTop} cursor="pointer">
        <span role="img" aria-label="rocket">
          &#128640;
        </span>{" "}
        Наверх!{" "}
        <span role="img" aria-label="rocket">
          &#128640;
        </span>
      </Text>
      <LinkIconBar links={links} />
    </Box>
  );
};

export default Footer;
