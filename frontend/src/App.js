import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  Header, 
  HeroSection, 
  ProductsOverview, 
  PopularHammocks, 
  FeaturesSection, 
  Footer, 
  CookieBanner 
} from './components';
import { ShopPage, HammocksPage, ContactPage, BundlePage, LearnPage } from './pages';

// Home Page Component
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProductsOverview />
      <PopularHammocks />
      <FeaturesSection />
    </>
  );
};

// Simple pages for navigation items that don't have full implementations yet
const TopInsulationPage = () => (
  <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-light text-gray-900 mb-4">УТЕПЛЕНИЕ</h1>
      <p className="text-gray-600">Страница в разработке</p>
    </div>
  </div>
);

const ShelterPage = () => (
  <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-light text-gray-900 mb-4">ТЕНТЫ И УКРЫТИЯ</h1>
      <p className="text-gray-600">Страница в разработке</p>
    </div>
  </div>
);

const AccessoriesPage = () => (
  <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-light text-gray-900 mb-4">АКСЕССУАРЫ</h1>
      <p className="text-gray-600">Страница в разработке</p>
    </div>
  </div>
);

const MyAccountPage = () => (
  <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-light text-gray-900 mb-4">МОЙ АККАУНТ</h1>
      <p className="text-gray-600">Страница входа в аккаунт</p>
    </div>
  </div>
);

const CartPage = () => (
  <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-light text-gray-900 mb-4">КОРЗИНА</h1>
      <p className="text-gray-600">Ваша корзина пуста</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/hammocks" element={<HammocksPage />} />
            <Route path="/insulation" element={<TopInsulationPage />} />
            <Route path="/shelter" element={<ShelterPage />} />
            <Route path="/accessories" element={<AccessoriesPage />} />
            <Route path="/bundle" element={<BundlePage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/account" element={<MyAccountPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </BrowserRouter>
    </div>
  );
}

export default App;