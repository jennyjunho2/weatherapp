import { useState } from "react";

function useForceUpdate() {
  const [dummy, setDummy] = useState<number>(0);

  return setDummy((prev) => prev + 1);
}

export default useForceUpdate;
