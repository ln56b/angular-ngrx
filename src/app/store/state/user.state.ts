import { IUser } from '../../models/user.interface'

export interface IUserState {
  users: IUser[]
  selectedUser: IUser
}

export const initialUserState: IUserState = {
  users: [],
  selectedUser: null
}