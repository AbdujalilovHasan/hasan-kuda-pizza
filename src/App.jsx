import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartProvider from './contexts/CartContext';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import PizzaPage from './pages/PizzaPage';
import SousePage from './pages/SousePage';
import SushiPage from './pages/SushiPage';
import DessertsPage from './pages/DeserstsPage';
import DrinksPage from './pages/DrinksPage';
import SnacksPage from './pages/SnacksPage';
import ComboPage from './pages/ComboPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/pizza" element={<PizzaPage />} />
          <Route path="/sushi" element={<SushiPage />} />
          <Route path="/drinks" element={<DrinksPage />} />
          <Route path="/snaks" element={<SnacksPage />} />
          <Route path="/combo" element={<ComboPage />} />
          <Route path="/desserts" element={<DessertsPage />} />
          <Route path="/souse" element={<SousePage />} />

        </Routes>
      </Router>
    </CartProvider>
  );
}


export default App;