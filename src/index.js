import React from "react";
import ReactDOM from "react-dom";

import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter />
      <hr />
      <h1>Wyzwanie: useState</h1>
      <p>
        To wyzwanie polega na dokończeniu prostej aplikacji śledzącej wartość
        licznika. Tym razem użyjemy do tego Hooks API.
      </p>
      <p>
        Twoim zadaniem jest użycie funkcji <code>useState</code>. Zwraca ona
        stan, który jest przechowywany między kolejnymi renderami komponentu
        oraz funkcję do jego modyfikacji. Za argument przyjmuje wartość
        początkową. Za jej pomocą stwórz zmienną <code>value</code>. Następnie
        użyj zwróconej funkcji aby dopisać implementację <code>increase</code> i{" "}
        <code>decrease</code>.
      </p>
      <p>
        Po wykonaniu wyzwania możesz je przesłać do sprawdzenie na dwa sposoby.
      </p>
      <ul>
        <li>
          Odesłać zawartość pliku <code>src/Counter.js</code> w odpowiedzi na
          otrzymanego maila.
        </li>
        <li>
          Zrobić fork tego codesandboxa i przesłać link do zmodyfikowanej przez
          Ciebie wersji.
        </li>
      </ul>
      <p>
        * Jeżeli nigdy wcześniej nie miałeś styczności Hooks API w React.js
        zajrzyj pod ten{" "}
        <a href="https://reactjs.org/docs/hooks-reference.html#usestate">
          link
        </a>{" "}
        i sprawdź działanie funkcji <code>useState()</code>. Możesz również
        obejrzeć te{" "}
        <a href="https://egghead.io/lessons/react-use-the-usestate-react-hook">
          video
        </a>{" "}
        trwające 79 sekund.
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
