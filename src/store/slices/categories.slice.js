import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 const categoriesSlice=createSlice({
    name:'categories',
    initialState:null,
    reducers:{
        setCategories:(state, action)=>action.payload
    }
})

export const {setCategories} =categoriesSlice.actions

export default categoriesSlice.reducer

export const getAllCategories=()=>(dispatch)=>{
    const URL=`https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`
    return axios.get(URL)
        .then(res=>dispatch(setCategories(res.data.data.category)))
        .catch(err=>console.log(err))
}