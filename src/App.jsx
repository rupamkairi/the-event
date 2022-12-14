import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import AppContextProvider from "./contexts/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </AppContextProvider>
  );
}

export default App;
