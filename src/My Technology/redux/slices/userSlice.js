import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const freelancerUser = createAsyncThunk('freelancer', async() => {
    try{
        const res = await fetch("http://localhost:8000/freelancer");
        const data = await res.json();
        return data
    } catch(err){
        throw Error("Couldn'n fetch data from resource");
    }
})
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        signupData:{
            fname: '',
            lname: '',
            email: '',
            password: '',
            rePassword: '',
            description: ''
        },
        userData: [],
        status: {
            fulfilled: true,
            pending: true,
            err: false
        }
    },
    reducers:{
        newUser: (state, action) => {
            state.signupData.fname = action.payload.data.firstName
            state.signupData.lname = action.payload.data.lastName
            state.signupData.email = action.payload.data.email
            state.signupData.password = action.payload.data.password
            state.signupData.rePassword = action.payload.data.rePassword
            state.signupData.description = action.payload.data.desc
            state.signupData.description = action.payload.data.img
            console.log(action.payload)
        },
        
    },
    extraReducers: {
        [freelancerUser.fulfilled]: (state, action) => {
            state.status.pending = false;
            state.userData = action.payload
        },
        [freelancerUser.pending]: (state) => {
            state.status.pending = false
        },
        [freelancerUser.rejected]: state => {
            state.status.err = true
        }
    }
})
export const {newUser} = userSlice.actions;
export default userSlice.reducer;