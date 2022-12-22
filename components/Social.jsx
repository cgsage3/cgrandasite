import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiDribbble,
  FiLinkedin,
} from "react-icons/fi";

const SocialShare = [
  { iconName: <FiTwitter />, link: "https://twitter.com/" },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/feed/",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
