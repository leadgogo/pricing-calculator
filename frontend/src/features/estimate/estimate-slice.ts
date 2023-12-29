import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { EstimateState, RootState } from 'src/store/types';
import { PlanTypes } from 'src/store/types';

const initialState: EstimateState = {
  selectedPlan: PlanTypes.Essential,
};

export const estimateSlice = createSlice({
  name: 'estimate',
  initialState,
  reducers: {
    loadEstimateFromURL: (state, action: PayloadAction<RootState>) => {
      const { estimate } = action.payload;
      if (estimate) {
        state.selectedPlan = estimate.selectedPlan;
      }
    },
    setSelectedPlan: (state, action: PayloadAction<PlanTypes>) => {
      state.selectedPlan = action.payload;
    },
  },
});

export const { setSelectedPlan, loadEstimateFromURL } = estimateSlice.actions;
