import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = import.meta.env.VITE_APP_API_URL

const createLending = createAsyncThunk('lendings/createLending', async({id})=> {

  try{

    const response = await axios.post(`${API_URL}/${id}`)
    return{
      client: response.data,
      message: 'Lending created successfully :)'
    }

  }catch(e){
    console.log(e)
    return{
      lending: null,
      message: e.response.data
    }
  }

})

const lendingActions = {
  createLending
}

export default lendingActions
