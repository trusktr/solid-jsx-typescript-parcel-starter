/* @jsxImportSource solid-js */
import { createState, onCleanup, Component, JSX } from "solid-js";
import { render } from "solid-js/web";

const App: Component = () => {
  const [state, setState] = createState({ count: 0 }),
    timer = setInterval(() => setState("count", (c) => c + 1), 1000);
  onCleanup(() => clearInterval(timer));

  return <div>{state.count}</div>;
};

render(() => <App />, document.getElementById("app"));
