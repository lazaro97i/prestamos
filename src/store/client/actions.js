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
const deleteClient = createAsyncThunk('clients/deleteClient', async({id}) => {
  console.log(id)

  try{
    const response = await axios.delete(`${API_URL}/clients`, {data:{id: id}})
    return{
      client: response.data,
      message: 'Client deleted successfully'
    }
  }catch(err){
    console.log(err)
    return{
      client: null,
      message: 'Client not found :('
    }
  }
})
const createClient = createAsyncThunk('clients/createClient', async(data) => {

  try{
    const response = await axios.post(`${API_URL}/clients`, data)
    console.log(response)
    return{
      client: response.data,
      message: 'Client created successfully :)'
    }
  }catch(err){
    console.log(err)
    return{
      client: null,
      message: 'Could not create client :('
    }
  }
})

const clientActions = {
  getClients,
  deleteClient,
  createClient
}

export default clientActions