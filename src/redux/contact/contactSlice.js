import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter();

const initialState = contactAdaptor.getInitialState()

export const contactSelectors = contactAdaptor.getSelectors(state => state.contacts)

export const contactSlice = createSlice({
    name :"contacts",
    initialState,
    reducers:{
        addContact : contactAdaptor.addOne,
        deleteContact: contactAdaptor.removeOne,
    }
})

export const {addContact,deleteContact} = contactSlice.actions
export default contactSlice.reducer