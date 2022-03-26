import userReducer, {UserState, IUserStatetAndUserEntity, initialUserState} from './user'

import {GlobalAction} from '../actions'

export type GlobalState = {
	user: UserState | IUserStatetAndUserEntity;
}

export const initialState: GlobalState = {user: initialUserState}

const globalReducer = ({user}: GlobalState, action: GlobalAction): GlobalState => ({
	user: userReducer(user, action),
})

export default globalReducer
