import { useState } from 'react';

const useToggle = (initialState = false) => {
  const [isEnabled, setIsEnabled] = useState(initialState);

  const enable = () => setIsEnabled(true);
  const disable = () => setIsEnabled(false);
  const toggle = () => setIsEnabled(!isEnabled);

  return { isEnabled, enable, disable, toggle };
};

export default useToggle;
