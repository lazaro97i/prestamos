import { createReducer } from "@reduxjs/toolkit"
import clientActions from "./actions"

const { getClients, createClient } = clientActions

const initialState = {
  clients: [],
  client: [],
  message: [],
}

const clientReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getClients.fulfilled, (state, action) => {
      let newState = {
        clients: action.payload.clients,
        message: action.payload.message,
      }
      return newState
    })
    .addCase(createClient.fulfilled, (state, action) => {
      let newState = {
        client: action.payload.client,
        message: action.payload.message,
      }
      return newState
    })
})

export default clientReducer

