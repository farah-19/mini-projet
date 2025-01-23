import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    color: '',
  },
  reducers: {
    updateColor: (state, action) => {
      state.color = action.payload;
    },
    addRequest: (state, action) => {
      state.requests.push(action.payload); // Adds the new request to the requests array
    },
  },
});

export const { updateColor , addRequest } = userSlice.actions;
export default userSlice.reducer;
