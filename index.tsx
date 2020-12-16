/* @jsxImportSource solid-js */
import { createState, onCleanup, Component, JSX } from "solid-js";
import { render } from "solid-js/web";

const App: Component = () => {
  const [state, setState] = createState({ count: 0 }),
    timer = setInterval(() => setState("count", (c) => c + 1), 1000);
  onCleanup(() => clearInterval(timer));

  // The @jsxImportSource comment is needed for this JSX expression to recognize the <div> intrinsic element.
  return <div>{state.count}</div>;
};

render(() => <App />, document.getElementById("app"));

// The `import {JSX} from "solid-js"` is  needed in order to use the JSX types in non-JSX expressions
interface Foo extends JSX.HTMLAttributes<HTMLDivElement> {}
