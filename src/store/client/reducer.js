import { createReducer } from "@reduxjs/toolkit"
import clientActions from "./actions"

const { getClients } = clientActions

const initialState = {
  clients: [],
  client: [],
  message: [],
  status: null
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
})

export default clientReducer

