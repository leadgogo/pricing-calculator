import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/store';

export enum PlanTypes {
  Professional = 'PROFESSIONAL',
  Essential = 'ESSENTIAL',
  Premium = 'PREMIUM',
}

export interface EstimateState {
  selectedPlan: PlanTypes;
}

const initialState: EstimateState = {
  selectedPlan: PlanTypes.Essential,
};

export const estimateSlice = createSlice({
  name: 'counter',
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

export const { setIsWhatsappActivated, setSelectedPlan, loadEstimateFromURL } = estimateSlice.actions;
