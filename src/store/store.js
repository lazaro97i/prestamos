import { configureStore } from "@reduxjs/toolkit"
import clientReducer from "./client/reducer"

const store = configureStore({
  reducer: {
    client: clientReducer
  }
})

export default store