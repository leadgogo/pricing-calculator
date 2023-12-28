import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadEstimateFromURL } from 'src/features/estimate/estimate-slice';
import type { RootState } from 'src/store';

export interface CompaniesState {
  totalLocations: number;
  workingDaysPerWeek: number;
  hoursOpenPerDay: number;
}

const initialState: CompaniesState = {
  totalLocations: 1,
  workingDaysPerWeek: 5,
  hoursOpenPerDay: 12,
};

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    setFieldValue: (state, action: PayloadAction<{ value: string; field: string }>) => {
      const { value, field } = action.payload;

      if (field === 'workingDaysPerWeek') {
        if (Number(value) > 7) {
          return;
        }
      }

      if (field === 'hoursOpenPerDay') {
        if (Number(value) > 24) {
          return;
        }
      }

      if ((Number(value) > 0 && Number(value) < 1000) || value === '') {
        state[field] = value;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(loadEstimateFromURL, (state, action: PayloadAction<RootState>) => {
      const { companies } = action.payload;
      if (companies) {
        state.totalLocations = companies.totalLocations;
        state.workingDaysPerWeek = companies.workingDaysPerWeek;
        state.hoursOpenPerDay = companies.hoursOpenPerDay;
      }
    });
  },
});

export const { setFieldValue } = companiesSlice.actions;
