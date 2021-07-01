import React, { lazy, Suspense } from "react";
import Spinner from "./Components/Spinner/Spinner";
const EmojiTable = lazy(() => import("./Components/EmojiTable/EmojiTable"));
const Header = lazy(() => import("./Components/Header/Header"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Header />
      <EmojiTable />
    </Suspense>
  );
}

export default App;
