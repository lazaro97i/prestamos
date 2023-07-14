import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = import.meta.env.VITE_APP_API_URL

const createLending = createAsyncThunk('lendings/createLending', async({data, modalConfirm, modalLending})=> {

  try{
    const response = await axios.post(`${API_URL}/lending`, data)
    setTimeout(()=>{
      modalConfirm(),
      modalLending()
    },800)
    return{
      lending: response.data,
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

const getLendigsClient = createAsyncThunk('lendings/getLending', async({client_id}) => {

  try{
    const response = await axios.get(`${API_URL}/lending/?id=${client_id}`)
    return{
      lendingsClient: response.data,
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

const getAllLendings = createAsyncThunk('lendings/getAll', async() => {

  try{
    const response = await axios.get(`${API_URL}/lending`)
    return{
      allLendings: response.data,
      message: 'Lendings found successfully :)'
    }
  }catch(e){
    console.log(e)
    return{
      allLendings: null,
      message: 'Lendings not found :('
    }
  }
})

const lendingActions = {
  createLending,
  getLendigsClient,
  getAllLendings
}

export default lendingActions
