import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { type } from './index';

export default {
  component: Core,
  title: 'Core',
  decorators: [withKnobs]
};

export const typeSample = () => (
  <div 
    blue 
    onClick={action('button-clicked')}>
      
    </div>
);

