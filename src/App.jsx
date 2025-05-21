// src/App.jsx
import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext"; // Adlandırılmış export
import { LanguageProvider } from "./contexts/LanguageContext"; // Adlandırılmış export
import AppContent from "./components/AppContent"; // Varsayılan export
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app-container">
          <AppContent />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
