import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store';
import { loadEstimateFromURL } from 'src/features/estimate/estimate-slice';

export interface TextMessagesState {
  callsPerHourAmount: number;
  callDurationInMinutes: number;
}

const initialState: TextMessagesState = {
  callsPerHourAmount: 1,
  callDurationInMinutes: 1,
};

export const callMinutesSlice = createSlice({
  name: 'callMinutes',
  initialState,
  reducers: {
    setFieldValue: (state, action: PayloadAction<{ value: string; field: string }>) => {
      const { value, field } = action.payload;

      if ((Number(value) >= 0 && Number(value) < 9999) || value === '') {
        state[field] = Number(value);
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(loadEstimateFromURL, (state, action: PayloadAction<RootState>) => {
      const { callMinutes } = action.payload;
      if (callMinutes) {
        state.callsPerHourAmount = callMinutes.callsPerHourAmount;
        state.callDurationInMinutes = callMinutes.callDurationInMinutes;
      }
    });
  },
});

export const { setFieldValue } = callMinutesSlice.actions;
