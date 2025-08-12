import { createSlice } from "@reduxjs/toolkit"

const carSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addtoCart:(state,xog)=>{
            const newData=xog.payload
            state.items.push(newData)
        }
    }
})
export const {addtoCart}=carSlice.actions
export default carSlice.reducer