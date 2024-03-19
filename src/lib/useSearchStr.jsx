import { useState, useEffect } from 'react';

const usePersistedState = (initialState, sessionStorageKey) => {
  const [state, setState] = useState(() => {
    const persistedValue = sessionStorage.getItem(sessionStorageKey);
    return persistedValue ? JSON.parse(persistedValue) : initialState;
  });
  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
  }, [state, sessionStorageKey]);
  return [state, setState];
};

export const useSearchStr = () => {
  return usePersistedState('', 'searchSting');
};
// this code is for the search box that you type something wont go away when you refresh and the and the data that you type in search box is stored in session storage.
