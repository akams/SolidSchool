import {GlobalState} from './reducers'

const STORAGE_KEY = 'PERSISTENT_STATE'

export const setPersistentState = (state: GlobalState) => {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export const getPersistentState = () => {
	const state = localStorage.getItem(STORAGE_KEY)

	return state ? JSON.parse(state) : undefined
}
