import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'contributing',
    {
      type: 'category',
      label: 'Guides',
      link: {
        "type": "generated-index",
        "description": "Some of the advanced features to fully understand Datastrike."
      },
      items: ['guides/architecture' ],
    },
  ],
   
};

export default sidebars;
