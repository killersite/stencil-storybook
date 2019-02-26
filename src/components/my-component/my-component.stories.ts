import { storiesOf } from '@storybook/html';
import results from '../../../jest-test-results.json';
import { withTests } from '@storybook/addon-jest';

storiesOf('My Component', module)
  .addDecorator(withTests({ results }))
  .add(
    'simple',
    () =>
      '<my-component first="Stencil" last="\'Don\'t call me a framework\' JS"></my-component>',
    {
      jest: ['my-component.e2e.ts']
    }
  );
