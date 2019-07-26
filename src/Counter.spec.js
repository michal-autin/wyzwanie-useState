import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Counter from "./Counter";

it("should increment a counter", () => {
  const el = document.createElement("div");
  document.body.appendChild(el);
  // we attach the element to document.body to ensure events work
  act(() => {
    ReactDOM.render(<Counter />, el);
  });
  const button = document.querySelector("button");
  const pElement = document.querySelector("p");
  console.log(button.innerHTML);
  act(() => {
    for (let i = 0; i < 3; i++) {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });
  expect(pElement.innerHTML).toBe("Wartość licznika: 3");
});
