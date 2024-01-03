import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { EstimateState, RootState } from 'src/store/types';
import { PlanTypes } from 'src/store/types';

const essentialPlanIcludedItems = [
  '1,000 Monthly Active Contacts (MAC)',
  '1 phone number',
  '250 call minutes (PR/US/CA)',
  '100 SMS (PR/US/CA)',
  '1 company',
  '10 users',
  'Email Support',
  'WhatsApp Business Integration (additional fees apply)',
];

const professionalPlanIcludedItems = [
  ...essentialPlanIcludedItems,
  'Phone Support',
  'CRM',
  'Tasks',
  'Appointments',
  'Advanced Reporting',
  'Internal Notes and Mentions',
];

const premiumPlanIcludedItems = [
  ...professionalPlanIcludedItems,
  'Priority Support',
  'Dedicated Account Executive',
  'Customer Success Programs',
  'Advanced Roles',
  'Unlimited Users',
];

export const plans = {
  [PlanTypes.Essential]: {
    monthlyCost: '99.00',
    title: 'Essential Plan',
    setupFee: '250',
    includedItems: essentialPlanIcludedItems,
  },
  [PlanTypes.Professional]: {
    monthlyCost: '159.00',
    title: 'Professional Plan',
    setupFee: '500',
    includedItems: professionalPlanIcludedItems,
  },
  [PlanTypes.Premium]: {
    monthlyCost: '349.00',
    title: 'Premium Plan',
    setupFee: '700',
    includedItems: premiumPlanIcludedItems,
  },
};

const initialState: EstimateState = {
  selectedPlan: PlanTypes.Essential,
};

export const generateEstimateLink = createAsyncThunk('estimate/generateLink', async (_, thunkApi) => {
  const state = thunkApi.getState();
  // The Redux state is encryted to base64 to be shared in the URL
  const encryptedState = btoa(JSON.stringify(state));
  const url = new URL(window.location.origin);
  url.searchParams.set('data', encryptedState);
  const newLink = url.toString();
  window.history.pushState(null, '', newLink);
  navigator.clipboard.writeText(newLink);
});

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
