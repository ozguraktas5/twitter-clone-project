import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "OzgurAktass",
    fullName: "Özgür Aktaş",
    avatar:
      "https://pbs.twimg.com/profile_images/1687082554308886528/SaJdq0M8_400x400.jpg",
  },
  accounts: [
    {
      id: 1,
      username: "OzgurAktass",
      fullName: "Özgür Aktaş",
      avatar:
        "https://pbs.twimg.com/profile_images/1687082554308886528/SaJdq0M8_400x400.jpg",
    },
    {
      id: 2,
      username: "bilallgunaydin",
      fullName: "Bilal Günaydın",
      avatar:
        "https://pbs.twimg.com/profile_images/1675386025546219520/nGTiD939_400x400.jpg",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // state manipule etme metodlari
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload == state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions;
export default auth.reducer;
