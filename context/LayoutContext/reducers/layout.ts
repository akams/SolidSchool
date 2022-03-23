import {GlobalAction} from '../actions'

export interface LayoutState {
  isSidebarOpened: boolean;
};

export const initialLayoutState: LayoutState = {
  isSidebarOpened: true,
}

const layoutReducer = (state: LayoutState, action: GlobalAction): LayoutState => {
	switch (action.type) {
	case 'TOGGLE_SIDEBAR': {
		return {
			...state,
      isSidebarOpened: !state.isSidebarOpened
		}
	}
	default:
		throw new Error(`Unhandled action type: ${action.type}`);
	}
}

export default layoutReducer
