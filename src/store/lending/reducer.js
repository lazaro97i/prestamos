import { createReducer } from "@reduxjs/toolkit"
import lendingActions from "./actions"

const { createLending } = lendingActions

const initialState = {
  lendings: [],
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
})

export default lendingReducer