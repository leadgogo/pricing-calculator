import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TextMessagesState, RootState } from 'src/store/types';
import { loadEstimateFromURL } from 'src/features/estimate/estimate-slice';

const initialState: TextMessagesState = {
  receivedTextsPerHour: 1,
  sentTextsPerHour: 1,
};

export const textMessagesSlice = createSlice({
  name: 'textMessages',
  initialState,
  reducers: {
    setFieldValue: (state, action: PayloadAction<{ value: string; field: string }>) => {
      const { value, field } = action.payload;

      if ((Number(value) > 0 && Number(value) < 99999) || value === '') {
        state[field] = Number(value);
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(loadEstimateFromURL, (state, action: PayloadAction<RootState>) => {
      const { textMessages } = action.payload;
      if (textMessages) {
        state.receivedTextsPerHour = textMessages.receivedTextsPerHour;
        state.sentTextsPerHour = textMessages.sentTextsPerHour;
      }
    });
  },
});

export const { setFieldValue } = textMessagesSlice.actions;
