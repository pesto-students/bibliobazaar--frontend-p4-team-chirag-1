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
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "./shared/components/login/login"
import SignUpModal from "./shared/components/signup/signup"
import { setLoginClose, setSignupClose } from "./logic/reducers/userSlice";



const App = () => {
  const {
    user: { loginOpen, signupOpen }
  } = useSelector((state) => state);
  const dispatch = useDispatch();
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
          </Routes>
        </Container>
        <Footer />
        <LoginModal open={loginOpen} onClose={() => dispatch(setLoginClose())}/>
        <SignUpModal open={signupOpen} onClose={() => dispatch(setSignupClose())}/>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
