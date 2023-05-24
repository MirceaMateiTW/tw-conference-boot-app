import { useCallback, useEffect, useState } from "react";

import _ from "lodash";

export const useKeyDown = (callback: () => void, keys: string[]) => {
  const [pressedKeys, setPressedKeys] = useState<Array<string>>([]);
  const onKeyDown = useCallback(
    (event: { key: string; preventDefault: () => void }) => {
      const currentKey = event.key;
      if (!pressedKeys.includes(currentKey)) {
        setPressedKeys([...pressedKeys, currentKey]);
      }
    },
    [pressedKeys]
  );

  useEffect(() => {
    console.log(pressedKeys.sort());
    if (_.isEqual(keys.sort(), pressedKeys.sort())) {
      setPressedKeys([]);
      callback();
    }
  }, [pressedKeys]);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);
};
