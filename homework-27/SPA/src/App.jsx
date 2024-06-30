import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import Main from "./components/Main/Main";
import Contacts from "./components/Contacts/Contacts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, themes } from "./components/app/themContext";
import { useState } from "react";
import "./App.css";
import { ErrorBoundary } from "./feature/ErrorBound/indes";

function App() {
  const theme = useState(themes.orange);
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <ErrorBoundary>
            <div style={{ background: theme[0].background }}>
              <Header />
              <main className="main">
                <Routes>
                  <Route path="main" element={<Main />}></Route>
                  <Route path="aboutMe" element={<AboutMe />}></Route>
                  <Route path="contacts" element={<Contacts />}></Route>
                </Routes>
              </main>
              <Footer />
            </div>
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
