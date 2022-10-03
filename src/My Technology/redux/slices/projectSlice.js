import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const projects = createAsyncThunk('project', async() => {
        try{
            const res = await fetch("http://localhost:5000/Project");
            const data = await res.json();
            return data
        } catch(err){
            throw Error("Couldn'n fetch data from resource");
        }
})
export const projectSlice = createSlice({
    name: 'project',
    initialState: {
        projectData: {
            pAddress: '',
            pSkills: '',
            pDescription: '',
            pBudget: '',
            pTime: 0,
            devTalk: ''
        },
        projects:{
            projectsData: []
        },
        status: {
            fulfilled: true,
            pending: true,
            err: false
        }
    },
    reducers:{
        addProject: (state, action) => {
            state.projectData.pAddress = action.payload.data.pName
            state.projectData.pSkills = action.payload.data.pSkills
            state.projectData.pDescription = action.payload.data.pDesc
            state.projectData.pBudget = action.payload.budget
            state.projectData.pTime = action.payload.data.time
            state.projectData.devTalk = action.payload.name
        },
        addName: (state, action) => {
            state.projectData.pAddress = action.payload
        }   
    },
    extraReducers: {
        [projects.fulfilled]: (state, action) => {
            state.status.pending = false;
            state.projects.projectsData = action.payload
        },
        [projects.pending]: (state) => {
            state.status.pending = false
            console.log(state.status.pending)
        },
        [projects.rejected]: state => {
            state.status.err = true
        }
    }
})
export const {addProject, addName} = projectSlice.actions;
export default projectSlice.reducer; 