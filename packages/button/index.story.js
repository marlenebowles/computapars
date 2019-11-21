import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './index';


storiesOf('Button', module)
  .add('regular', () => <Button onClick={action('button-clicked')}>Text</Button>)
  .add('primary', () => <Button onClick={action('button-clicked')} primary>Text</Button>)
  .add('disabled', () => <Button disabled>Text</Button>)