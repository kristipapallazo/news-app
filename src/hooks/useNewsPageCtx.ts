import { useContext } from "react";

import { NewsPageCtx } from "../context/NewsPageCtx";

const useNewsPageCtx = () => {
  const context = useContext(NewsPageCtx);

  if (!context)
    throw new Error("useNewsPageCtx must be used iniside AuthProvider");

  return context;
};

export default useNewsPageCtx;
