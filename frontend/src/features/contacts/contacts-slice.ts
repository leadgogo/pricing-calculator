import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store';
import { loadEstimateFromURL } from 'src/features/estimate/estimate-slice';

export interface ContactsState {
  totalContacts: number;
}

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

