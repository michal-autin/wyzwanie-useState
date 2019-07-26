import React from "react";

// here is the example og how to utilize useCallback/useMemo hooks
// to save on rerendering

const CountButton = React.memo(function CountButton({ onClick, count }) {
  console.log(`CountButton [${count}] Rerendering`);
  return <button onClick={onClick}>{count}</button>;
});

function DualCounter() {
  console.log("DualCounter Rerendering");
  const [count1, setCount1] = React.useState(0);
  const increment1 = React.useCallback(() => setCount1(c => c + 1), []);
  const [count2, setCount2] = React.useState(0);
  const increment2 = React.useCallback(() => setCount2(c => c + 1), []);
  return (
    <>
      <div>DualCounter</div>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </>
  );
}

function DualCounterUnoptimized() {
  const [count1, setCount1] = React.useState(0);
  const increment1 = () => setCount1(c => c + 1);
  const [count2, setCount2] = React.useState(0);
  const increment2 = () => setCount2(c => c + 1);
  return (
    <>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </>
  );
}

export { DualCounterUnoptimized };
export default DualCounter;
