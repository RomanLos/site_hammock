import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingCart, Menu, X, ChevronDown, Star, Shield, Truck, Award } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Header Component with updated navigation
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'ГЛАВНАЯ', href: '/', key: 'home' },
    { name: 'МАГАЗИН', href: '/shop', key: 'shop' },
    { name: 'ГАМАКИ', href: '/hammocks', key: 'hammocks', hasDropdown: true },
    { name: 'УТЕПЛЕНИЕ', href: '/insulation', key: 'insulation', hasDropdown: true },
    { name: 'ТЕНТЫ', href: '/shelter', key: 'shelter', hasDropdown: true },
    { name: 'АКСЕССУАРЫ', href: '/accessories', key: 'accessories', hasDropdown: true },
    { name: 'НАБОРЫ', href: '/bundle', key: 'bundle' },
    { name: 'ОБУЧЕНИЕ', href: '/learn', key: 'learn', hasDropdown: true },
    { name: 'КОНТАКТЫ', href: '/contact', key: 'contact' },
    { name: 'АККАУНТ', href: '/account', key: 'account' },
    { name: 'КОРЗИНА', href: '/cart', key: 'cart' }
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                  <path d="M20 40 L50 20 L80 40 L70 45 L50 35 L30 45 Z"/>
                  <path d="M30 50 L50 40 L70 50 L70 60 L50 70 L30 60 Z"/>
                  <path d="M35 65 L50 60 L65 65 L50 75 Z"/>
                </svg>
              </div>
              <span className="text-white text-xl font-bold tracking-wider">SUPERIOR GEAR</span>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.key}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 flex items-center space-x-1 ${
                    location.pathname === item.href 
                      ? 'text-blue-400' 
                      : 'text-white hover:text-blue-400'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                </Link>
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 w-48 bg-black/95 backdrop-blur-sm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2">
                    <div className="p-4 space-y-2">
                      <Link to="#" className="block text-white text-sm hover:text-blue-400 transition-colors">Популярные</Link>
                      <Link to="#" className="block text-white text-sm hover:text-blue-400 transition-colors">Новинки</Link>
                      <Link to="#" className="block text-white text-sm hover:text-blue-400 transition-colors">Скидки</Link>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="lg:hidden mt-4 bg-black/95 backdrop-blur-sm rounded-lg p-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`block text-sm font-medium py-2 transition-colors ${
                  location.pathname === item.href 
                    ? 'text-blue-400' 
                    : 'text-white hover:text-blue-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

// Hero Section Component (same as before)
export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/18759222/pexels-photo-18759222.jpeg')`
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl"
        style={{ opacity }}
      >
        <motion.p
          className="text-white/80 text-lg mb-4 tracking-widest"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          ВАШЕ СЛЕДУЮЩЕЕ ПРИКЛЮЧЕНИЕ ЖДЕТ
        </motion.p>

        <motion.h1
          className="text-white text-6xl md:text-8xl font-light mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <span className="block">ПРОСТОТА</span>
          <span className="block">УЮТ</span>
          <span className="block">ЛЕГКОСТЬ</span>
        </motion.h1>

        <motion.p
          className="text-white text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Откройте для себя самую универсальную всепогодную систему гамаков в мире.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <Link
            to="/shop"
            className="border border-white text-white px-8 py-3 text-sm font-medium tracking-wider hover:bg-white hover:text-black transition-all duration-300 inline-block"
          >
            СМОТРЕТЬ БОЛЬШЕ ➤
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

// Products Overview Section (same as before but with updated Russian text)
export const ProductsOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            ПРОДУКЦИЯ SUPERIOR GEAR
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Покупайте наше премиальное снаряжение для гамаков и аксессуары для кемпинга для лучшего отдыха на природе. 
            От сверхлегких гамаков и прочных тентов до утепленных одеял и подвесных систем, наше высококачественное 
            снаряжение создано для комфорта, защиты и приключений.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Hammocks */}
          <motion.div
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Link to="/hammocks">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src="https://images.unsplash.com/photo-1697150474295-b8aec4f8ffe7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxoYW1tb2NrJTIwY2FtcGluZ3xlbnwwfHx8fDE3NTA5MDM1MDd8MA&ixlib=rb-4.1.0&q=85"
                  alt="Гамаки"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-light text-blue-600 mb-4">ГАМАКИ</h3>
              <p className="text-gray-700 leading-relaxed">
                Исследуйте наши премиальные гамаки, созданные для комфорта, долговечности и приключений. 
                Будь то сверхлегкий вариант для пеших походов или уютная установка для отдыха на заднем дворе.
              </p>
            </Link>
          </motion.div>

          {/* Top Insulation */}
          <motion.div
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Link to="/insulation">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src="https://images.unsplash.com/photo-1736164508021-0c53a250f928?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxoYW1tb2NrJTIwYWNjZXNzb3JpZXN8ZW58MHx8fHwxNzUwOTAzNTIwfDA&ixlib=rb-4.1.0&q=85"
                  alt="Утепление"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-light text-blue-600 mb-4">УТЕПЛЕНИЕ</h3>
              <p className="text-gray-700 leading-relaxed">
                Оставайтесь в тепле и уюте в любое время года с нашим премиальным утеплением и одеялами. 
                Созданы для максимального тепла и легкой упаковки.
              </p>
            </Link>
          </motion.div>

          {/* Hammock Accessories */}
          <motion.div
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Link to="/accessories">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src="https://images.pexels.com/photos/31501018/pexels-photo-31501018.jpeg"
                  alt="Аксессуары для гамаков"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-light text-blue-600 mb-4">АКСЕССУАРЫ</h3>
              <p className="text-gray-700 leading-relaxed">
                Исследуйте наши аксессуары для гамаков и улучшите свою установку с подвесными системами, 
                сетками от насекомых, креплениями и многим другим.
              </p>
            </Link>
          </motion.div>

          {/* Shelter Tarps */}
          <motion.div
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Link to="/shelter">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src="https://images.unsplash.com/photo-1703304862580-206bdf82fbc8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwc2hlbHRlciUyMHRhcnB8ZW58MHx8fHwxNzUwOTAzNTE1fDA&ixlib=rb-4.1.0&q=85"
                  alt="Тенты-укрытия"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-light text-blue-600 mb-4">ТЕНТЫ</h3>
              <p className="text-gray-700 leading-relaxed">
                Оставайтесь сухими и защищенными с нашими высококачественными тентами и укрытиями. 
                Созданы для прочности и легкого покрытия.
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Popular Hammocks Section (same as before but with Russian text)
export const PopularHammocks = () => {
  const hammocks = [
    {
      id: 1,
      name: "Сверхлегкий походный гамак",
      price: "$149.99",
      image: "https://images.unsplash.com/photo-1697150474295-b8aec4f8ffe7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxoYW1tb2NrJTIwY2FtcGluZ3xlbnwwfHx8fDE3NTA5MDM1MDd8MA&ixlib=rb-4.1.0&q=85",
      features: ["Сверхлегкий", "Водостойкий", "Легкая установка"],
      rating: 4.9
    },
    {
      id: 2,
      name: "Всепогодный кемпинговый гамак",
      price: "$189.99",
      image: "https://images.pexels.com/photos/31501018/pexels-photo-31501018.jpeg",
      features: ["Всепогодная защита", "Премиум комфорт", "Прочная конструкция"],
      rating: 4.8
    },
    {
      id: 3,
      name: "Гамак для дикой природы",
      price: "$169.99",
      image: "https://images.unsplash.com/photo-1596742910522-4e3f36ebb393?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxjYW1waW5nJTIwd2lsZGVybmVzc3xlbnwwfHx8fDE3NTA5MDM1MjV8MA&ixlib=rb-4.1.0&q=85",
      features: ["Проверен в дикой природе", "Максимальный комфорт", "Надежная установка"],
      rating: 4.7
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-8">
            <svg viewBox="0 0 100 100" className="w-16 h-16 fill-gray-800">
              <path d="M20 40 L50 20 L80 40 L70 45 L50 35 L30 45 Z"/>
              <path d="M30 50 L50 40 L70 50 L70 60 L50 70 L30 60 Z"/>
              <path d="M35 65 L50 60 L65 65 L50 75 Z"/>
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            НАШИ САМЫЕ ПОПУЛЯРНЫЕ ГАМАКИ
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
            Испытайте непревзойденный комфорт и долговечность с гамаками Superior. Изготовленные из высококачественных 
            материалов и созданные для максимального расслабления, наши гамаки обеспечивают идеальное сочетание воздухопроницаемости, 
            стабильности и удобства.
          </p>
          <p className="text-gray-700 text-base max-w-3xl mx-auto">
            От сверхлегких гамаков до водостойких тентов и уютных одеял, эти топовые продукты обеспечивают лучший опыт на природе. 
            Покупайте сейчас и улучшите свое кемпинговое снаряжение премиальным, высокопроизводительным оборудованием.
          </p>
        </motion.div>

        {/* Hammocks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hammocks.map((hammock, index) => (
            <motion.div
              key={hammock.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={hammock.image}
                  alt={hammock.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{hammock.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">{hammock.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">{hammock.price}</p>
                
                <ul className="space-y-2 mb-6">
                  {hammock.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium">
                  В корзину
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            to="/hammocks"
            className="bg-blue-600 text-white px-8 py-4 text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Посмотреть все гамаки
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Features Section (same as before but with Russian text)
export const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Защита от погоды",
      description: "Создано для выдерживания любых погодных условий с премиальными материалами"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Премиальное качество",
      description: "Изготовлено из материалов высочайшего качества для длительной службы"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Бесплатная доставка",
      description: "Бесплатная доставка всех заказов свыше $75 по всему миру"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "5-звездочный рейтинг",
      description: "Доверие тысяч любителей активного отдыха по всему миру"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4 text-blue-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component (updated with Russian text)
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <svg viewBox="0 0 100 100" className="w-8 h-8 fill-white">
                <path d="M20 40 L50 20 L80 40 L70 45 L50 35 L30 45 Z"/>
                <path d="M30 50 L50 40 L70 50 L70 60 L50 70 L30 60 Z"/>
                <path d="M35 65 L50 60 L65 65 L50 75 Z"/>
              </svg>
              <span className="text-lg font-bold">SUPERIOR GEAR</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Премиальные сверхлегкие кемпинговые гамаки, тенты и пуховые одеяла, созданные для комфорта и приключений.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-xs">i</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">Быстрые ссылки</h4>
            <ul className="space-y-3">
              {[
                { name: 'Весь каталог', href: '/shop' },
                { name: 'Гамаки', href: '/hammocks' },
                { name: 'Аксессуары', href: '/accessories' },
                { name: 'Тенты', href: '/shelter' },
                { name: 'Наборы', href: '/bundle' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-medium mb-6">Служба поддержки</h4>
            <ul className="space-y-3">
              {[
                { name: 'Контакты', href: '/contact' },
                { name: 'Доставка', href: '#' },
                { name: 'Возвраты', href: '#' },
                { name: 'Размеры', href: '#' },
                { name: 'FAQ', href: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-6">Будьте в курсе</h4>
            <p className="text-gray-400 mb-4">Получайте последние новости о снаряжении и советы для отдыха на природе.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Введите ваш email"
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                Подписаться
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Superior Gear. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Политика конфиденциальности</Link>
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Условия использования</Link>
            <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Политика Cookie</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Cookie Banner Component (updated with Russian text)
export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 p-4"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-white text-sm">
        <p className="mb-4 md:mb-0 md:mr-4">
          Мы используем файлы cookie для улучшения вашего опыта на нашем сайте и показа релевантного контента. 
          Продолжая использовать наш сайт, вы соглашаетесь на использование файлов cookie.
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
        >
          Понятно
        </button>
      </div>
    </motion.div>
  );
};