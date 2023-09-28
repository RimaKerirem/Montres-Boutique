import "./App.css";
import { UpButton } from "./components/components";
import { Cart, Home, Order } from "./pages/pages";
import { Footer, Header, Top } from "./sections/sections";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Top />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panier" element={<Cart />} />
          <Route path="/commande" element={<Order />} />
        </Routes>
        <Footer />
      </Router>
      <UpButton />
    </>
  );
}

export default App;
