import { KeyboardEvent, useCallback, useRef, useState } from "react";

import { arrowKeyHandler } from "../../utils/arrowKeyHandler";

export const PassCodeInput = () => {
  const [inputArray, updateInputArray] = useState<string[]>([]);
  const inputRef = useRef(null);
  const handlerCallback = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      arrowKeyHandler(event, updateInputArray);
    },
    []
  );
  return (
    <div>
      <input autoFocus ref={inputRef} onKeyDown={handlerCallback} />
      {inputArray.map((input, index) => (
        <p key={`${index}.${input}`} style={{ margin: "0" }}>
          {input}
        </p>
      ))}
    </div>
  );
};
