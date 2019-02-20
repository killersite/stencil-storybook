import { storiesOf } from '@storybook/html';

storiesOf('My Component', module).add(
  'simple',
  () =>
    '<my-component first="Stencil" last="\'Don\'t call me a framework\' JS"></my-component>  '
);
