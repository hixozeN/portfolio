import { Icon, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { BiLink } from "react-icons/bi";
import { FaDev, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";
import { SiCodewars } from 'react-icons/si';
import { BsTelegram } from 'react-icons/bs'

const icons = {
  github: VscGithubInverted,
  linkedin: FaLinkedin,
  devpost: FaDev,
  email: MdEmail,
  document: IoMdDocument,
  youtube: FaYoutube,
  link: BiLink,
  codewars: SiCodewars,
  telegram: BsTelegram
};

const LinkIcon = ({ index, color, onHoverColor, url, label, icon }) => (
  <Tooltip label={label} aria-label={`${label}-tooltip`} key={`link-${index}`}>
    <Link
      aria-label={`Открыть ссылку ${url}`}
      display="inline-block"
      href={url}
      isExternal
    >
      <Icon
        as={icons[icon]}
        fontSize="xl"
        color={color}
        _hover={{ color: onHoverColor, transform: 'scale(1.2)' }}
      />
    </Link>
  </Tooltip>
);

export default LinkIcon;
