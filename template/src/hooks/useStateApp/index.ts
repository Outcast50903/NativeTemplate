import {useEffect} from 'react';
import {AppState, AppStateStatus} from 'react-native';

// eslint-disable-next-line no-unused-vars
const useAppState = (onChange: (status: AppStateStatus) => void) => {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onChange);

    return () => {
      subscription.remove();
    };
  }, [onChange]);
};

export default useAppState;
