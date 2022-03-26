import {
	createContext, Context, Dispatch, PropsWithChildren, ReducerAction, Reducer, useContext, useReducer,
	useEffect,
} from 'react'

import globalReducer, {initialState, GlobalState} from './reducers'
import {GlobalAction} from './actions'
import {setPersistentState} from './persistentState'

export type {GlobalAction} from './actions'
export type {GlobalState} from './reducers'

type GlobalStateContext = [GlobalState, Dispatch<ReducerAction<Reducer<GlobalState, GlobalAction>>>];

// The purpose of this method is only to type the initial context
// It will be replaced by the useReducer 'dispatch' function
const fakeDispatch: Dispatch<ReducerAction<Reducer<GlobalState, GlobalAction>>> = () => initialState
const globalStateContext: Context<GlobalStateContext> = createContext([initialState, fakeDispatch])

export const useGlobalState = (): GlobalStateContext => useContext(globalStateContext)

type GlobalStateProviderProps = {
  initialState?: GlobalState;
};

export const GlobalStateProvider = ({initialState: stateFromProps, children}: PropsWithChildren<GlobalStateProviderProps>) => {
	const reducer = useReducer(globalReducer, stateFromProps || initialState)
  const [state] = reducer

	useEffect(() => {
		setPersistentState(state)
	}, [state])

	return (
		<globalStateContext.Provider value={reducer}>{children}</globalStateContext.Provider>
	)
}
