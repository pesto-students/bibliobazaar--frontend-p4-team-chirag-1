import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, ThemeProvider } from "@mui/material";

import "./index.css";
import "./App.css";
import Header from "./shared/components/header/Header";
import Footer from "./shared/components/footer/Footer";
import Landing from "./pages/landing/Landing";
import Profile from "./pages/profile/Profile";
import { theme } from "./shared/styles/theme";
import Home from "./pages/home/Home";
import BookDetail from "./pages/bookDetail/BookDetail";
import Checkout from "./pages/checkout/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Container maxWidth='xl'>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/bookDetail" element={<BookDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Container>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
