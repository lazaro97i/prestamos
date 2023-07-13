import { configureStore } from "@reduxjs/toolkit"
import clientReducer from "./client/reducer"
import lendingReducer from "./lending/reducer"

const store = configureStore({
  reducer: {
    client: clientReducer,
    lending: lendingReducer
  }
})

export default store