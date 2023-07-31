import {createSlice} from '@reduxjs/toolkit'

export interface UserState{
    username: string
}

const initialState: UserState = {
    username: ""
}

export const slice = createSlice({
    name: 'textToPass', // action name
    initialState,
    reducers: {
        changeUsername: (state, action) => {
            state = {
                ...state,
                ...action.payload
            }
            return {...state}
        }
    }
})

export const { changeUsername } = slice.actions

export const getUser = (state: {user: UserState}) => state.user

export const UserReducer = slice.reducer