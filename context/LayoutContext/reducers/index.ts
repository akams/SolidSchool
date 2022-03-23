import layoutReducer, {LayoutState, initialLayoutState} from './layout'

import {GlobalAction} from '../actions'

export type GlobalState = LayoutState

export const initialState: GlobalState = {...initialLayoutState}

const globalReducer = (state: GlobalState, action: GlobalAction): GlobalState => layoutReducer(state, action)

export default globalReducer
