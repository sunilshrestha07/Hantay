import {createSlice } from '@reduxjs/toolkit'

const initialState={
    loading: false,
    error: null,
    currentUser: null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        SignInstart:(state)=>{
            state.loading=true,
            state.error=false
        },
        SignInSuccess:(state,action)=>{
            state.currentUser=action.payload,
            state.loading=false,
            state.error=null
        },
        SignInFailure:(state,action)=>{
            state.error=action.payload,
            state.loading=true
        }
    }

})

export const {SignInFailure,SignInSuccess,SignInstart }=userSlice.actions
export default userSlice.reducer