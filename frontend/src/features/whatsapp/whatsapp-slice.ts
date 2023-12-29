import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { WhatsappState, RootState } from 'src/store/types';
import { loadEstimateFromURL } from 'src/features/estimate/estimate-slice';

const initialState: WhatsappState = {
  isWhatsappActivated: false,
  totalPhoneNumbers: 1,
};

export const whatsAppSlice = createSlice({
  name: 'whatsapp',
  initialState,
  reducers: {
    setIsWhatsappActivated: (state, action: PayloadAction<boolean>) => {
      state.isWhatsappActivated = action.payload;
    },
    setTotalPhonenumbers: (state, action: PayloadAction<string>) => {
      const number = action.payload;

      if (Number(number) > 0 || number === '') {
        state.totalPhoneNumbers = Number(number);
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(loadEstimateFromURL, (state, action: PayloadAction<RootState>) => {
      const { whatsapp } = action.payload;
      if (whatsapp) {
        state.isWhatsappActivated = whatsapp.isWhatsappActivated;
        state.totalPhoneNumbers = whatsapp.totalPhoneNumbers;
      }
    });
  },
});

export const { setIsWhatsappActivated, setTotalPhonenumbers } = whatsAppSlice.actions;
