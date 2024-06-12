import { Suspense } from "react";
// import { TodoPage } from "../pages/TodoPage";

import { injectStores } from "@mobx-devtools/tools";
import { store } from "./providers/StoreProvider";

injectStores({
  store,
});

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>loading..</div>}>{/* <TodoPage /> */}</Suspense>
    </div>
  );
}

export default App;
