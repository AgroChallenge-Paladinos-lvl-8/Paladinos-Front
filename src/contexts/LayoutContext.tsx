import React, { createContext, Dispatch, useContext, useReducer } from "react";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type LayoutStateContextData = {
  isSidebarOpened?: boolean;
};

export enum LayoutActionsTypes {
  // eslint-disable-next-line no-unused-vars
  TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR",
}

type LayoutPayload = {
  [LayoutActionsTypes.TOGGLE_SIDEBAR]: undefined;
};

export type LayoutActions =
  ActionMap<LayoutPayload>[keyof ActionMap<LayoutPayload>];

const LayoutStateContext = createContext<LayoutStateContextData>({
  isSidebarOpened: false,
});
const LayoutDispatchContext = createContext<
  Dispatch<LayoutActions> | undefined
>({} as any);

function layoutReducer(
  state: LayoutStateContextData,
  action: LayoutActions
): { isSidebarOpened: boolean } {
  const isOpen = !state.isSidebarOpened;
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      localStorage.setItem("isSidebarOpened", isOpen ? "true" : "false");
      return { ...state, isSidebarOpened: isOpen };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const storagedIsSidebarOpened = localStorage.getItem("isSidebarOpened");

  const [state, dispatch] = useReducer(layoutReducer, {
    isSidebarOpened: storagedIsSidebarOpened !== "false",
  });

  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
};

function useLayoutState(): LayoutStateContextData {
  const context = useContext(LayoutStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}

function useLayoutDispatch(): Dispatch<LayoutActions> {
  const context = useContext(LayoutDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }
  return context;
}

// ###########################################################
function toggleSidebar(dispatch: Dispatch<LayoutActions>): void {
  dispatch({
    type: LayoutActionsTypes.TOGGLE_SIDEBAR,
  });
}

export { LayoutProvider, useLayoutState, useLayoutDispatch, toggleSidebar };
