import { createReducer } from "@reduxjs/toolkit"
import lendingActions from "./actions"

const { createLending, getLendigsClient, getAllLendings } = lendingActions

const initialState = {
  allLendings: [],
  lendingsClient: [],
  lending: [],
  message: []
}

const lendingReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createLending.fulfilled, (state, action)=>{
      let newState = {
        lending: action.payload.lending,
        message: action.payload.message
      }
      return newState
    })
    .addCase(getLendigsClient.fulfilled, (store, action) => {
      let newState = {
        lendingsClient: action.payload.lendings,
        message: action.payload.message
      }
      return newState
    })
    .addCase(getAllLendings.fulfilled, (store, action) => {
      let newState = {
        allLendings: action.payload.allLendings,
        message: action.payload.message
      }
      return newState
    })
})

export default lendingReducer