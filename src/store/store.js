import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../features/settingsSlice"; // Örnek olarak settingsSlice burada kullanılmış
import languageReducer from '../features/languageSlice';

const store = configureStore({
  reducer: {
    language: languageReducer,
    setting: settingsReducer,
    // Diğer reducer'ları buraya ekleyebilirsiniz
  },
});

export default store;
