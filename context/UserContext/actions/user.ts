export interface UserEntity {
  id: number;
  username: string;
  password: string;
  struct_key: string;
  start_date: string;
  end_date: string;
}

export type UserLoadedAction = { type: 'user-loaded'; payload: UserEntity };
