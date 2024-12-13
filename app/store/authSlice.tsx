import { PayloadAction,createSlice } from '@reduxjs/toolkit';
import {User} from "../typesds"



interface AuthState {
    user: User | null;
}

const initialState: AuthState = {
    user: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setAuthUser:(state,action:PayloadAction<User | null >)=>{
            state.user = action.payload
        }
    }
})
export const {setAuthUser} = authSlice.actions
export default authSlice.reducer;