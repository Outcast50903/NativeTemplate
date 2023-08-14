import React from 'react';
import {SvgXml} from 'react-native-svg';
import {SvgProps} from './types';

const GoBackIcon: React.FC<SvgProps> = ({
  height = 10,
  width = 10,
  color = '#ffffff',
}) => {
  const imgSvg = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
    stroke-width="1.5" stroke="${color}">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
  </svg>

  `;

  return <SvgXml xml={imgSvg} />;
};

export default GoBackIcon;
