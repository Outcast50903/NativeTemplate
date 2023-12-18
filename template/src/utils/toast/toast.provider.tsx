import { createContext, FC, useState } from 'react';
import { isDarkModeAtom } from 'common';
import { useAtomValue, useSetAtom } from 'jotai';

import Toast from './toast';
import { isActiveAtom } from './toast.atom';
import { ToastContextData, ToastProps, ToastProviderProps } from './types';

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = useState<ToastProps>({ message: '', type: 'default' });
  const setIsVisible = useSetAtom(isActiveAtom);
  const isDarkMode = useAtomValue(isDarkModeAtom);
  
  const colors = {
    info: ['#0D73DA', '#012A54'],
    success: ['#00B26A', '#033D26'],
    warning: ['#FFA900', '#4C2C00'],
    error: ['#FF3D71', '#4C0B1D'],
    default: ['#012A54', '#012A54'],
  }  

  const showToast = ({ message, type }: ToastProps) => {
    setIsVisible(true)
    setToast({ message, type });
    setTimeout(() => setIsVisible(false), 3000);
  };  

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast 
        {...toast}
        autoHideMs={1000}
        containerStyle={{
          backgroundColor: isDarkMode ? 'black' : 'white',
          borderLeftWidth: 12,
          borderLeftColor: colors[toast.type || 'default'][0],
        }}
        containerTextStyle={{
          color: isDarkMode ? 'white' : 'black',
        }} 
      />
      {children}
    </ToastContext.Provider>
  );
};

export { ToastProvider, ToastContext };