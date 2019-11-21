import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from "@storybook/addon-knobs";
import Button from './index';

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs]
};

export const blue = () => (
  <Button blue onClick={action('button-clicked')}>Text</Button>
);

export const orange = () => (
  <Button orange onClick={action('button-clicked')}>Text</Button>
);