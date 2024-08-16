import { createContext, FunctionComponent, ReactNode, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface CtxType {
  isPrefModalOpen: boolean;
  openPrefModal: () => void;
  closePrefModal: () => void;
  toggleModal: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const initialState: CtxType = {
  isPrefModalOpen: false,
  // isPrefModuleOpen: false,
  openPrefModal: () => {},
  closePrefModal: () => {},
  toggleModal: () => {},
};

const NewsPageCtx = createContext(initialState);

const NewsPageCtxProvider: FunctionComponent<ProviderProps> = ({
  children,
}) => {
  const [isPrefModalOpen, setIsPrefModalOpen] = useState<boolean>(false);

  const openPrefModal = () => {
    setIsPrefModalOpen(true);
  };
  const closePrefModal = () => {
    setIsPrefModalOpen(false);
  };
  const toggleModal = () => {
    setIsPrefModalOpen((prev) => !prev);
  };

  return (
    <NewsPageCtx.Provider
      value={{ isPrefModalOpen, openPrefModal, closePrefModal, toggleModal }}
    >
      {children}
    </NewsPageCtx.Provider>
  );
};

export { NewsPageCtx, NewsPageCtxProvider };
