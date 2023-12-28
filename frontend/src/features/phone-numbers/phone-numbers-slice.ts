import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store';
import { loadEstimateFromURL } from 'src/features/estimate/estimate-slice';

export interface PhoneNumbersState {
  agentPhoneNumbersAmount: number;
  extraPhoneNumbersAmount: number;
  campaignPhoneNumbersAmount: number;
}

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

      if ((Number(value) > 0 && Number(value) < 200) || value === '') {
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
