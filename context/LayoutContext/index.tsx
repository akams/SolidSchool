import {
  createContext,
  Context,
  Dispatch,
  PropsWithChildren,
  ReducerAction,
  Reducer,
  useContext,
  useReducer,
} from 'react';

import globalReducer, { initialState, GlobalState } from './reducers';
import { GlobalAction } from './actions';

export type { GlobalAction } from './actions';
export type { GlobalState } from './reducers';

type GlobalStateContext = [
  GlobalState,
  Dispatch<ReducerAction<Reducer<GlobalState, GlobalAction>>>
];

// The purpose of this method is only to type the initial context
// It will be replaced by the useReducer 'dispatch' function
const fakeDispatch: Dispatch<
  ReducerAction<Reducer<GlobalState, GlobalAction>>
> = () => initialState;
const LayoutStateContext: Context<GlobalStateContext> = createContext([
  initialState,
  fakeDispatch,
]);

export const useLayoutGlobalState = (): GlobalStateContext =>
  useContext(LayoutStateContext);

type GlobalStateProviderProps = {
  initialState?: GlobalState;
};

export const GlobalLayoutStateProvider = ({
  initialState: stateFromProps,
  children,
}: PropsWithChildren<GlobalStateProviderProps>) => {
  const reducer = useReducer(globalReducer, stateFromProps || initialState);

  return (
    <LayoutStateContext.Provider value={reducer}>
      {children}
    </LayoutStateContext.Provider>
  );
};

export function toggleSidebar(dispatch: Dispatch<ReducerAction<Reducer<GlobalState, GlobalAction>>>) {
  dispatch({
    type: "TOGGLE_SIDEBAR",
  });
}
