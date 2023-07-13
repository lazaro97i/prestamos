import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = import.meta.env.VITE_APP_API_URL

const createLending = createAsyncThunk('lendings/createLending', async({data, modalConfirm, modalLending})=> {

  try{
    const response = await axios.post(`${API_URL}/lending`, {data: data})
    setTimeout(()=>{
      modalConfirm(),
      modalLending()
    },800)
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

const getLendings = createAsyncThunk('lendings/getLending', async({client_id}) => {

  try{
    const response = await axios.get(`${API_URL}/lending/?id=${client_id}`)
    return{
      lendings: response.data,
      message: 'Lendings founds successfully :)'
    }
  }catch(e){
    console.log(e)
    return{
      lendings: null,
      message: e.response.data
    }
  }
})

const lendingActions = {
  createLending,
  getLendings
}

export default lendingActions
