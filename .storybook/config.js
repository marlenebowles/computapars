import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react'
import baseTheme from './baseTheme';
import { Normalize } from 'styled-normalize'

const req = require.context('../packages', true, /.story.js$/);

addDecorator(storyFn => 
    (<div style={{
        paddingTop: '15px'
    }}>
        <Normalize />
        {storyFn()}
    </div>
));

addParameters({
    options: {
        theme: baseTheme,
    },
});

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module); // keep this last
