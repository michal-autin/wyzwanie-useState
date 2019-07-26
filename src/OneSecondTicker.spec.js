import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import OneSecondTicker from "./OneSecondTicker";

it("should tick after 1s", () => {
  jest.useFakeTimers();
  const el = document.createElement("div");
  document.body.appendChild(el);
  // we attach the element to document.body to ensure events work
  act(() => {
    ReactDOM.render(<OneSecondTicker />, el);
  });
  const button = el;
  expect(el.innerHTML).toBe("0");
  act(() => {
    jest.runAllTimers();
  });
  expect(el.innerHTML).toBe("1");
});
