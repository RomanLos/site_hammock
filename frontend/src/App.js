import React from 'react';
import './App.css';
import { 
  Header, 
  HeroSection, 
  ProductsOverview, 
  PopularHammocks, 
  FeaturesSection, 
  Footer, 
  CookieBanner 
} from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ProductsOverview />
        <PopularHammocks />
        <FeaturesSection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;