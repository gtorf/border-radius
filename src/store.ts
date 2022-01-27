import {createSlice, configureStore, PayloadAction} from '@reduxjs/toolkit'

interface RadiusState {
  radius: number
}

const initialState: RadiusState = {
  radius: 20
}


const radiusSlice = createSlice({
  name: "radius",
  initialState,
  reducers: {
    updateRadius: (state, action: PayloadAction<number>) => {
      state.radius = action.payload
    }
  }
})

export const { updateRadius } = radiusSlice.actions
export const selectRadius = (state: RadiusState) => state.radius
export default radiusSlice.reducer

export const store = configureStore({
  reducer: radiusSlice.reducer
})
