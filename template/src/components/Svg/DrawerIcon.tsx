import React from 'react';
import {SvgXml} from 'react-native-svg';

import {SvgProps} from './types';

const DrawerIcon: React.FC<SvgProps> = ({
  height = 10,
  width = 10,
  color = '#ffffff',
}) => {
  const imgSvg = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" 
    stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" 
      stroke="${color}" />
  </svg>
  `;

  return <SvgXml xml={imgSvg} />;
};

export default DrawerIcon;
