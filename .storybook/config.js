import { configure } from '@storybook/html';
import { setOptions } from '@storybook/addon-options';

setOptions({
  hierarchySeparator: /\/|\./, // matches a . or /
  hierarchyRootSeparator: /\|/ // matches a |
});

function loadStories() {
  require('../stories');
  // automatically import all story ts files that end with *.stories.ts
  const req = require.context('../src', true, /\.stories\.ts$/);

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
