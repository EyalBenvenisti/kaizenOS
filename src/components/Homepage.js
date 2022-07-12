import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from './carbon.jpg';

const FirstLeftText = () => <p>Callout component</p>;

const FirstRightText = () => (
  <p>
    Hello
  </p>
);

const SecondLeftText = () => <p>Callout component</p>;

const SecondRightText = () => (
  <p>
  Hello
  </p>
);

const BannerText = () => <h1>Building while riding</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
