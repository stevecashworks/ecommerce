import {createSlice} from '@reduxjs/toolkit';
const initialState={wentDown:false};
 const scrollSlice=createSlice({
    name:'scroll',
    initialState,
    reducers:{
        setScroll:(state,action)=>{
            state.wentDown=action.payload
        }
    }
 })
 export const {setScroll}=scrollSlice.actions;
 export const selectScroll=state=>state.scroll.wentDown
 export  default scrollSlice.reducer