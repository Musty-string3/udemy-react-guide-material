import { useState, lazy, Suspense } from "react";

const LazyComponentA = lazy(() => import("./components/ComponentA"));

const Example = () => {
  const [compA, setCompA] = useState(false);

  return (
    <>
      <button onClick={() => setCompA((prev) => !prev)}>ComponentA</button>
      <Suspense fallback={ <div>Loading...</div> }>
      { compA && <LazyComponentA />}
      </Suspense>
    </>
  );
};

export default Example;
