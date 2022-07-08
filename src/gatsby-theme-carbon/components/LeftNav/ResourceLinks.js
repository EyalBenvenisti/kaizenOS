import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';


const links = [
  {
    title: 'Behance',
    href: 'https://www.behance.net/EyalBenvenisti',
  },
  {
    title: 'Figma',
    href: 'https://www.figma.com/@eyalbenvenisti',
  },
  {
    title: 'GitLab',
    href: 'https://gitlab.com/kaizenn',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/eyalbenvenisti',
  },
  {
    title: 'Spotify',
    href: '  https://open.spotify.com/user/22vazsixghykr6zam65re5i3q?si=de5b0268c1c84e3c',
  },
  {
    title: 'Webflow',
    href: 'https://webflow.com/eyalbenvenisti',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
