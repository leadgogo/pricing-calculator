import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TextMessagesState, RootState } from 'src/store/types';
import { loadEstimateFromURL } from 'src/features/estimate/estimate-slice';

export const EXESS_SMS_COST = 0.05;
export const SMS_BRAND_REGISTRATION_COST = 94.0;
export const SMS_CAMPAIGN_MONTHLY_FEE = 10.0;

const initialState: TextMessagesState = {
  isTextMessagesActivated: true,
  receivedTextsPerHour: 1,
  sentTextsPerHour: 1,
};

export const textMessagesSlice = createSlice({
  name: 'textMessages',
  initialState,
  reducers: {
    setFieldValue: (state, action: PayloadAction<{ value: string; field: string }>) => {
      const { value, field } = action.payload;

      if ((Number(value) >= 0 && Number(value) < 99999) || value === '') {
        state[field] = Number(value);
      }
    },
    setIsTextMessagesActivated: (state, action: PayloadAction<boolean>) => {
      state.isTextMessagesActivated = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(loadEstimateFromURL, (state, action: PayloadAction<RootState>) => {
      const { textMessages } = action.payload;
      if (textMessages) {
        state.receivedTextsPerHour = textMessages.receivedTextsPerHour;
        state.sentTextsPerHour = textMessages.sentTextsPerHour;
        state.isTextMessagesActivated = textMessages.isTextMessagesActivated;
      }
    });
  },
});

export const { setFieldValue, setIsTextMessagesActivated } = textMessagesSlice.actions;
