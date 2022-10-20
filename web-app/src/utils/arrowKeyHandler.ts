import { Dispatch, KeyboardEvent, SetStateAction } from "react";

export const arrowKeyHandler = (
  event: KeyboardEvent<HTMLInputElement>,
  callback: Dispatch<SetStateAction<string[]>>
) => {
  switch (event.key) {
    case "ArrowLeft":
      callback((state: string[]) => [...state, "Left"]);
      break;
    case "ArrowRight":
      callback((state: string[]) => [...state, "Right"]);
      break;
    case "ArrowUp":
      callback((state: string[]) => [...state, "Up"]);
      break;
    case "ArrowDown":
      callback((state: string[]) => [...state, "Down"]);
      break;
    default:
      event.preventDefault();
      break;
  }
};
