import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlanTypes, type ContactsState, type RootState } from 'src/store/types';
import { loadEstimateFromURL } from 'src/features/estimate/estimate-slice';

// Contact blocks == 100 contacts
export const EXESS_PLAN_MONTHLY_ACTIVE_CONTACT_BLOCK_FEE = {
  [PlanTypes.Essential]: 9.0,
  [PlanTypes.Professional]: 15.0,
  [PlanTypes.Premium]: 18.0,
};

const initialState: ContactsState = {
  totalContacts: 1000,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setTotalContacts: (state, action: PayloadAction<string>) => {
      const number = action.payload;

      if (Number(number) > 0 || number === '') {
        state.totalContacts = Number(number);
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(loadEstimateFromURL, (state, action: PayloadAction<RootState>) => {
      const { contacts } = action.payload;
      if (contacts) {
        state.totalContacts = contacts.totalContacts;
      }
    });
  },
});

export const { setTotalContacts } = contactsSlice.actions;
