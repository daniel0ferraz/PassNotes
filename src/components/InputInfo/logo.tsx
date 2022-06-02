import React from 'react';

import IconFacebook from '../../assets/icon-facebook.svg';
import IconGoogle from '../../assets/icon-google.svg';
import IconFigma from '../../assets/figma.svg';
import IconGithub from '../../assets/github.svg';
import IconTwiter from '../../assets/twitter.svg';
import IconTwitch from '../../assets/twitch.svg';
import IconNotion from '../../assets/notion.svg';
import Instagram from '../../assets/instagram.svg';
import Slack from '../../assets/slack.svg';
import Outlook from '../../assets/outlook.svg';
import RocketChat from '../../assets/rocketchat.svg';
import IconWord from '../../assets/icon-worldblue.svg';

const cardLogo = {
  Facebook: {
    icon: <IconFacebook width={18} height={18} />,
  },
  Google: {
    icon: <IconGoogle width={18} height={18} />,
  },
  Figma: {
    icon: <IconFigma width={18} height={18} />,
  },
  Github: {
    icon: <IconGithub width={18} height={18} />,
  },
  Twitter: {
    icon: <IconTwiter width={18} height={18} />,
  },
  Twitch: {
    icon: <IconTwitch width={18} height={18} />,
  },
  Notion: {
    icon: <IconNotion width={18} height={18} />,
  },
  Instagram: {
    icon: <Instagram width={18} height={18} />,
  },
  Slack: {
    icon: <Slack width={18} height={18} />,
  },
  Outlook: {
    icon: <Outlook width={18} height={18} />,
  },
  RocketChat: {
    icon: <RocketChat width={18} height={18} />,
  },
  '': {
    icon: <IconWord width={18} height={18} />,
  },
};

export const getLogo = (name: string) => {
  if (name && name) {
    const prefix = name;
    return cardLogo.hasOwnProperty(prefix) ? cardLogo[prefix] : false;
  }

  return cardLogo.undefined;
};
