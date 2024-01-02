import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { PhoneNumbersState, RootState } from 'src/store/types';
import { loadEstimateFromURL } from 'src/features/estimate/estimate-slice';

export const EXTRA_PHONE_NUMBER_COST = 7.0;
export const PREMIUM_PHONE_NUMBER_FEE = 15.0;

const initialState: PhoneNumbersState = {
  agentPhoneNumbersAmount: 1,
  extraPhoneNumbersAmount: 1,
  campaignPhoneNumbersAmount: 1,
};

export const phoneNumbersSlice = createSlice({
  name: 'phoneNumbers',
  initialState,
  reducers: {
    setFieldValue: (state, action: PayloadAction<{ value: string; field: string }>) => {
      const { value, field } = action.payload;

      if ((Number(value) >= 0 && Number(value) < 200) || value === '') {
        state[field] = Number(value);
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(loadEstimateFromURL, (state, action: PayloadAction<RootState>) => {
      const { phoneNumbers } = action.payload;
      if (phoneNumbers) {
        state.agentPhoneNumbersAmount = phoneNumbers.agentPhoneNumbersAmount;
        state.extraPhoneNumbersAmount = phoneNumbers.extraPhoneNumbersAmount;
        state.campaignPhoneNumbersAmount = phoneNumbers.campaignPhoneNumbersAmount;
      }
    });
  },
});

export const { setFieldValue } = phoneNumbersSlice.actions;
