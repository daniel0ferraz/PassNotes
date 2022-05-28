import React from 'react';

import IconFacebook from '../../assets/icon-facebook.svg';
import IconGoogle from '../../assets/icon-google.svg';
import IconFigma from '../../assets/figma.svg';
import IconGithub from '../../assets/github.svg';
import IconTwiter from '../../assets/twitter.svg';
import IconTwitch from '../../assets/twitch.svg';
import IconNotion from '../../assets/notion.svg';

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
  Twiter: {
    icon: <IconTwiter width={18} height={18} />,
  },
  Twitch: {
    icon: <IconTwitch width={18} height={18} />,
  },
  Notion: {
    icon: <IconNotion width={18} height={18} />,
  },
};

export const getLogo = (name: string) => {
  if (name && name) {
    const prefix = name;
    return cardLogo.hasOwnProperty(prefix) ? cardLogo[prefix] : false;
  }

  return cardLogo.undefined;
};
