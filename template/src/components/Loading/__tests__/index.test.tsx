import React from 'react';
import {describe, expect,it} from '@jest/globals';
import { render } from '@testing-library/react-native';

import Loading from '../index';

describe('Loading component', () => {
  it('should defined', () => {
    const { getByText } = render(<Loading />);
    
    const loadingText = getByText('Cargando la información');

    expect(loadingText).toBeDefined();
  });

  it('should use Container component', () => {
    const {getByTestId} = render(<Loading />);
    const container = getByTestId('custom-container-id');

    expect(container).toBeDefined();
  });

  it('should render View and Text components', () => {
    const {getByText, getByTestId} = render(<Loading />);
    const loadingText = getByText('Cargando la información');
    const viewComponent = getByTestId('view-component');

    expect(loadingText).toBeDefined();
    expect(viewComponent).toBeDefined();
  });
});
