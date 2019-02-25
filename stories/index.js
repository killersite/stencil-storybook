import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import { withActions, action } from '@storybook/addon-actions';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { withNotes } from '@storybook/addon-notes';
import {
  array,
  boolean,
  button,
  color,
  date,
  select,
  withKnobs,
  text,
  number
} from '@storybook/addon-knobs';

storiesOf('Demo', module)
  .addDecorator(withKnobs)
  .addDecorator(withBackgrounds)
  .addDecorator(withNotes)
  .addParameters({
    backgrounds: [
      { name: 'light', value: '#eeeeee', default: true },
      { name: 'dark', value: '#222222' }
    ]
  })
  .add('heading', () => '<h1>Hello World</h1>')
  .add('button', () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Hello Button';
    button.addEventListener('click', e => console.log(e));
    return button;
  })
  .add(
    'Simple Action',
    () => {
      const button = () => `<button type="button">Hello World</button>`;
      return withActions('click')(button);
    },
    {
      notes: 'My notes on some *bold text*'
    }
  )
  .add('All knobs', () => {
    const name = text('Name', 'Jane');
    const stock = number('Stock', 20, {
      range: true,
      min: 0,
      max: 30,
      step: 5
    });
    const fruits = {
      Apple: 'apples',
      Banana: 'bananas',
      Cherry: 'cherries'
    };
    const fruit = select('Fruit', fruits, 'apples');

    const price = number('Price', 2.25);

    const colour = color('Border', 'deeppink');
    const today = date('Today', new Date('Jan 20 2017 GMT+0'));
    const items = array('Items', ['Laptop', 'Book', 'Whiskey']);
    const nice = boolean('Nice', true);

    const stockMessage = stock
      ? `I have a stock of ${stock} ${fruit}, costing &dollar;${price} each.`
      : `I'm out of ${fruit}${nice ? ', Sorry!' : '.'}`;

    const salutation = nice ? 'Nice to meet you!' : 'Leave me alone!';
    const dateOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    };

    button('Arbitrary action', action('You clicked it!'));

    const style = `border: 2px dotted ${colour}; padding: 8px 22px; border-radius: 8px`;

    return `<div style="${style}">
        <h1>My name is ${name},</h1>
        <h3>today is ${new Date(today).toLocaleDateString(
          'en-US',
          dateOptions
        )}</h3>
        <p>${stockMessage}</p>
        <p>Also, I have:</p>
        <ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>
        <p>${salutation}</p>
      </div>
    `;
  });
