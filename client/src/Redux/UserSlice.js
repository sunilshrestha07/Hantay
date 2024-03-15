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
            state.error=null
        },
        SignInSuccess:(state,action)=>{
            state.currentUser=action.payload,
            state.loading=false,
            state.error=null
        },
        SignInFailure:(state,action)=>{
            state.error=action.payload,
            state.loading=false
        },
        updateSuccess:(state,action)=>{
            state.loading=false,
            state.currentUser=action.payload,
            state.error=null
        }
    }

})

export const {SignInFailure,SignInSuccess,SignInstart ,updateSuccess}=userSlice.actions
export default userSlice.reducer