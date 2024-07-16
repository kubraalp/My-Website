import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../features/settingsSlice"; // Örnek olarak settingsSlice burada kullanılmış

const store = configureStore({
  reducer: {
    setting: settingsReducer,
    // Diğer reducer'ları buraya ekleyebilirsiniz
  },
});

export default store;
