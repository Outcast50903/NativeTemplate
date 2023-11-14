import React from 'react';
import {describe, expect,it} from '@jest/globals';
import {render, screen} from '@testing-library/react-native';

import data from '../data';
import DetailsScreen from '..';

describe('DetailsScreen', () => {
  it('should render generate snapshot', () => {
    render(<DetailsScreen />);
    
    expect(screen).toMatchSnapshot();
  });

  it('should render Container and Card components', () => {
    render(<DetailsScreen />);
    
    expect(screen.findByTestId('custom-container-id')).toBeDefined();
    expect(screen.findByTestId('custom-card-id')).toBeDefined();
  });

  it('should render Text components with correct text', () => {
    render(<DetailsScreen />);

    expect(screen.getByText('Dependencies')).toBeTruthy();
    expect(screen.getByText('This project uses the following dependencies:')).toBeTruthy();
    expect(screen.getByText('\u2022 React Navigation')).toBeTruthy();
    expect(screen.getByText('\u2022 Axios')).toBeTruthy();
    expect(screen.getByText('\u2022 Jotai')).toBeTruthy();
    expect(screen.getByText('\u2022 Nativewind')).toBeTruthy();
    expect(screen.getByText('\u2022 TanStackQuery (React Query)')).toBeTruthy();
    expect(screen.getByText('\u2022 Dayjs')).toBeTruthy();
    expect(screen.getByText('\u2022 React native chart kit')).toBeTruthy();
    expect(screen.getByText('\u2022 React native SVG')).toBeTruthy();
  });

  it('should render FlatList component with correct data and renderItem prop', () => {    
    render(<DetailsScreen />);

    expect(screen.getByTestId('details-list-id')).toBeDefined();
    expect(screen.getByTestId('details-list-id').props.data).toEqual(data);
    expect(screen.getAllByTestId('details-item-component-id')).toBeDefined();
    expect(screen.getAllByTestId('details-item-component-id').length).toEqual(data.length);
  });

  it('should render Container component with the correct props', () => {
    render(<DetailsScreen />);

    expect(screen.getByTestId('custom-container-id').props.children).toBeDefined();
  });

  it('should render Card component with the correct props', () => {
    render(<DetailsScreen />);

    expect(screen.getByTestId('custom-card-id').props.children).toBeDefined();
  });

  it('should render Text component with the correct props', () => {
    render(<DetailsScreen />);    

    expect(screen.getByTestId('custom-card-id')).toHaveStyle({ backgroundColor: 'red' });
  });

  it(`should render Text 'Dependencies' with color style black`, () => {
    render(<DetailsScreen />);
    
    expect(screen.getByText('Dependencies')).toHaveStyle({ color: 'black', fontSize: 24, lineHeight: 32 });
  });

  it(`should render Text 'This project uses the following dependencies:' with color style black`, () => {
    render(<DetailsScreen />);
    
    expect(screen.getByText('This project uses the following dependencies:'))
      .toHaveStyle({ color: 'black', fontSize: 16, lineHeight: 24 });
  })

  it(`should count data lenght`, () => {
    render(<DetailsScreen />);
    
    expect(data.length).toEqual(8);
  });
});
