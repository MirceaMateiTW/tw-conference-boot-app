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
    console.log("pressedKeys", pressedKeys.sort());
    console.log("keys", keys.sort());

    if (isSame(keys, pressedKeys)) {
      setPressedKeys([]);
      callback();
    }
  }, [pressedKeys]);

  const isSame = (
    arrayOne: _.List<unknown> | null | undefined,
    arrayTwo: _.List<unknown> | null | undefined
  ) => {
    const a = _.uniq(arrayOne);
    const b = _.uniq(arrayTwo);

    return a.length === b.length && _.isEmpty(_.difference(b.sort(), a.sort()));
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);
};
