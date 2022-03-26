import {GlobalAction} from '../actions'
import {UserEntity} from '../actions/user'

export interface UserState {};
export interface IUserStatetAndUserEntity extends UserState, UserEntity {}

export const initialUserState: UserState = {}

const userReducer = (state: UserState | IUserStatetAndUserEntity, action: GlobalAction): UserState | IUserStatetAndUserEntity => {
	switch (action.type) {
	case 'user-loaded': {
		const user = action.payload
		return {
			...state,
      ...user,
		}
	}
	default:
		return state
	}
}

export default userReducer
