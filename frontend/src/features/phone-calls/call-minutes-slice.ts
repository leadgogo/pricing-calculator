import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { PhoneCallState, RootState } from 'src/store/types';
import { loadEstimateFromURL } from 'src/features/estimate/estimate-slice';

const initialState: PhoneCallState = {
  callsPerHourAmount: 1,
  callDurationInMinutes: 1,
  selectedCallMinutesPackage: '',
  callMinutePackages: [
    {
      quantity: '2000',
      pricePerUnit: '0.045',
      amount: '89.00',
    },
    {
      quantity: '5000',
      pricePerUnit: '0.040',
      amount: '199.00',
    },
    {
      quantity: '10000',
      pricePerUnit: '0.035',
      amount: '349.00',
    },
    {
      quantity: '20000',
      pricePerUnit: '0.030',
      amount: '599.00',
    },
    {
      quantity: '50000',
      pricePerUnit: '0.025',
      amount: '1249.00',
    },
    {
      quantity: '100000',
      pricePerUnit: '0.020',
      amount: '1999.00',
    },
  ],
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
    setSelectedCallMinutesPackage: (state, action: PayloadAction<string>) => {
      const selectedCallMinutesPackage = action.payload;

      state.selectedCallMinutesPackage = selectedCallMinutesPackage;
    },
  },
  extraReducers: builder => {
    builder.addCase(loadEstimateFromURL, (state, action: PayloadAction<RootState>) => {
      const { callMinutes } = action.payload;
      if (callMinutes) {
        state.callsPerHourAmount = callMinutes.callsPerHourAmount;
        state.callDurationInMinutes = callMinutes.callDurationInMinutes;
        state.selectedCallMinutesPackage = callMinutes.selectedCallMinutesPackage;
      }
    });
  },
});

export const { setFieldValue, setSelectedCallMinutesPackage } = callMinutesSlice.actions;
