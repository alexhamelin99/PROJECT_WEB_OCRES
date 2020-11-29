import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Graph from '../components/Graph';
import Météo from '../components/Météo';
import Search from '../components/Search';
export default {
  title: 'Widget',
};
export const graph = () => <Graph/>;
export const météo = () => <Météo/>;
export const search = () => <Search/>;