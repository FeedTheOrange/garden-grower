import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';

import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs/react';
import JSXAddon from 'storybook-addon-jsx';
import styles from '@sambego/storybook-styles';

import Provider from './Provider';
import { MemoryRouter } from 'react-router';

import configureStore from '../src/bootstrap/configureStore';

addDecorator(story => <Provider story={story()} />);
addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>);
addDecorator(styles({
  boxSizing: 'border-box',
  fontFamily: "'Helvetica Neue','Helvetica','Arial',sans-serif",
  fontSize: '16px',
  margin: 0,
}));
setAddon(JSXAddon);

const req = require.context('../src/components/', true, /story\.(jsx|js)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
