import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'GitLab',
    href: 'https://gitlab.com/kaizenn',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/eyalbenvenisti',
  },
  {
    title: 'Behance',
    href: 'https://www.behance.net/EyalBenvenisti',
  },

  {
    title: 'Configuration guide',
    href: '/guides/configuration',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
