import React from 'react';
import {SvgXml} from 'react-native-svg';
import {SvgProps} from './types';

const RightArrowIcon: React.FC<SvgProps> = ({
  height = 10,
  width = 10,
  color = '#ffffff',
}) => {
  const imgSvg = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" fill="${color}"/>
  </svg>
  `;

  return <SvgXml xml={imgSvg} />;
};

export default RightArrowIcon;
