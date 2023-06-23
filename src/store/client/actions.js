import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = import.meta.env.VITE_APP_API_URL

const getClients = createAsyncThunk('clients/getClients', async() => {

  try{
    const response = await axios.get(`${API_URL}/clients`)
    return {
      clients: response.data,
      message: 'Clients found successfully'
    }

  }catch(err){
    console.log(err)
    return{
      clients: null,
      message: 'Clients not found :('
    }
  }

})

const clientActions = {
  getClients
}

export default clientActions