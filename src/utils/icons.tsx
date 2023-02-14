import React from 'react';

import IconFacebook from '../assets/icon-facebook.svg';
import IconGoogle from '../assets/icon-google.svg';
import IconFigma from '../assets/figma.svg';
import IconGithub from '../assets/github.svg';
import IconTwiter from '../assets/twitter.svg';
import IconTwitch from '../assets/twitch.svg';
import IconNotion from '../assets/notion.svg';
import Instagram from '../assets/instagram.svg';
import Slack from '../assets/slack.svg';
import Outlook from '../assets/outlook.svg';
import RocketChat from '../assets/rocketchat.svg';
import IconWord from '../assets/icon-worldblue.svg';



export const logoSite = (logo: string) => {
    switch(logo){
        case 'Facebook': {
            return <IconFacebook width={18} height={18} />;
          }
          case 'Google': {
            return <IconGoogle width={18} height={18} />;
          }
    
          case 'Figma': {
            return <IconFigma width={18} height={18} />;
          }
    
          case 'Github': {
            return <IconGithub width={18} height={18} />;
          }
    
          case 'Twiter': {
            return <IconTwiter width={18} height={18} />;
          }
    
          case 'Twitch': {
            return <IconTwitch width={18} height={18} />;
          }
    
          case 'Notion': {
            return <IconNotion width={18} height={18} />;
          }
          case 'Instagram': {
            return <Instagram width={18} height={18} />;
          }
          case 'Slack': {
            return <Slack width={18} height={18} />;
          }
          case 'Outlook': {
            return <Outlook width={18} height={18} />;
          }
          case 'RocketChat': {
            return <RocketChat width={18} height={18} />;
          }
          default:
            return <IconWord width={18} height={18} />;
        }
    }
  