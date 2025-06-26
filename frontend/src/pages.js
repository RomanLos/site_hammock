import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, Eye, Filter, Search, Phone, Mail, MapPin, Clock, Shield, Truck, Award, RefreshCw } from 'lucide-react';

// Shop Page
export const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const products = [
    {
      id: 1,
      name: "Ultralight Backpacking Hammock",
      price: 149.99,
      originalPrice: 179.99,
      image: "https://images.unsplash.com/photo-1697150474295-b8aec4f8ffe7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxoYW1tb2NrJTIwY2FtcGluZ3xlbnwwfHx8fDE3NTA5MDM1MDd8MA&ixlib=rb-4.1.0&q=85",
      category: "hammocks",
      rating: 4.9,
      reviews: 234,
      sale: true
    },
    {
      id: 2,
      name: "Premium Down Sleeping Quilt",
      price: 259.99,
      image: "https://images.unsplash.com/photo-1736164508021-0c53a250f928?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxoYW1tb2NrJTIwYWNjZXNzb3JpZXN8ZW58MHx8fHwxNzUwOTAzNTIwfDA&ixlib=rb-4.1.0&q=85",
      category: "insulation",
      rating: 4.8,
      reviews: 189
    },
    {
      id: 3,
      name: "Ultralight Tarp Shelter",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1703304862580-206bdf82fbc8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwc2hlbHRlciUyMHRhcnB8ZW58MHx8fHwxNzUwOTAzNTE1fDA&ixlib=rb-4.1.0&q=85",
      category: "shelter",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "Tree Straps & Carabiners Set",
      price: 39.99,
      image: "https://images.pexels.com/photos/31501018/pexels-photo-31501018.jpeg",
      category: "accessories",
      rating: 4.9,
      reviews: 312
    },
    {
      id: 5,
      name: "Bug Net for Hammocks",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1734523855919-6d5ca737dacc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxoYW1tb2NrJTIwYWNjZXNzb3JpZXN8ZW58MHx8fHwxNzUwOTAzNTIwfDA&ixlib=rb-4.1.0&q=85",
      category: "accessories",
      rating: 4.6,
      reviews: 98
    },
    {
      id: 6,
      name: "All-Weather Camping Hammock",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1596742910522-4e3f36ebb393?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxjYW1waW5nJTIwd2lsZGVybmVzc3xlbnwwfHx8fDE3NTA5MDM1MjV8MA&ixlib=rb-4.1.0&q=85",
      category: "hammocks",
      rating: 4.8,
      reviews: 203
    }
  ];

  const categories = [
    { id: 'all', name: 'Все товары', count: products.length },
    { id: 'hammocks', name: 'Гамаки', count: products.filter(p => p.category === 'hammocks').length },
    { id: 'insulation', name: 'Утепление', count: products.filter(p => p.category === 'insulation').length },
    { id: 'shelter', name: 'Тенты', count: products.filter(p => p.category === 'shelter').length },
    { id: 'accessories', name: 'Аксессуары', count: products.filter(p => p.category === 'accessories').length }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">МАГАЗИН</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Премиальное снаряжение для кемпинга и отдыха на природе
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <motion.div
            className="lg:w-1/4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-medium mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Категории
              </h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="float-right text-sm opacity-75">
                      ({category.count})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium mb-4">Сортировка</h3>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="popular">По популярности</option>
                <option value="price-low">Цена: по возрастанию</option>
                <option value="price-high">Цена: по убыванию</option>
                <option value="rating">По рейтингу</option>
              </select>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <motion.div
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.sale && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                        СКИДКА
                      </div>
                    )}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
                        <Heart className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">
                        ({product.reviews})
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-xl font-bold text-gray-900">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      В корзину
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Hammocks Page
export const HammocksPage = () => {
  const hammocks = [
    {
      id: 1,
      name: "Ultralight Solo Hammock",
      price: 149.99,
      originalPrice: 179.99,
      image: "https://images.unsplash.com/photo-1697150474295-b8aec4f8ffe7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxoYW1tb2NrJTIwY2FtcGluZ3xlbnwwfHx8fDE3NTA5MDM1MDd8MA&ixlib=rb-4.1.0&q=85",
      weight: "18 oz",
      capacity: "400 lbs",
      rating: 4.9,
      reviews: 234,
      sale: true,
      features: ["Сверхлегкий", "Водостойкий", "Быстрая установка", "Компактный"]
    },
    {
      id: 2,
      name: "All-Weather Double Hammock",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1596742910522-4e3f36ebb393?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxjYW1waW5nJTIwd2lsZGVybmVzc3xlbnwwfHx8fDE3NTA5MDM1MjV8MA&ixlib=rb-4.1.0&q=85",
      weight: "24 oz",
      capacity: "500 lbs",
      rating: 4.8,
      reviews: 189,
      features: ["Двухместный", "Всепогодный", "Усиленный", "Комфортный"]
    },
    {
      id: 3,
      name: "Wilderness Explorer Hammock",
      price: 169.99,
      image: "https://images.pexels.com/photos/31501018/pexels-photo-31501018.jpeg",
      weight: "20 oz",
      capacity: "450 lbs",
      rating: 4.7,
      reviews: 156,
      features: ["Проверен в дикой природе", "Максимальный комфорт", "Надежная установка"]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <motion.div
          className="relative h-64 rounded-lg overflow-hidden mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/18759222/pexels-photo-18759222.jpeg')`
            }}
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-light mb-4">ГАМАКИ</h1>
              <p className="text-xl">Премиальные гамаки для любых приключений</p>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {hammocks.map((hammock, index) => (
            <motion.div
              key={hammock.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={hammock.image}
                  alt={hammock.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {hammock.sale && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    СКИДКА
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{hammock.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">{hammock.name}</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">${hammock.price}</span>
                    {hammock.originalPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">
                        ${hammock.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    ({hammock.reviews} отзывов)
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-600">Вес:</span>
                    <span className="font-medium ml-1">{hammock.weight}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Нагрузка:</span>
                    <span className="font-medium ml-1">{hammock.capacity}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {hammock.features.map((feature, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  В корзину
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          className="bg-white rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-light text-gray-900 mb-6 text-center">
            Почему выбирают наши гамаки?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-medium mb-2">Прочность</h3>
              <p className="text-gray-600 text-sm">Выдерживают нагрузку до 500 фунтов</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-medium mb-2">Качество</h3>
              <p className="text-gray-600 text-sm">Премиальные материалы и конструкция</p>
            </div>
            <div className="text-center">
              <Truck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-medium mb-2">Доставка</h3>
              <p className="text-gray-600 text-sm">Бесплатная доставка по всему миру</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Contact Page
export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет отправка формы
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">КОНТАКТЫ</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Свяжитесь с нами для получения помощи или консультации
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-lg shadow-sm p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-light mb-6">Отправить сообщение</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Тема
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение *
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Отправить сообщение
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-light mb-6">Контактная информация</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Адрес</h3>
                    <p className="text-gray-600">Minnesota, USA</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Телефон</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">info@superiorgear.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Часы работы</h3>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-gray-600">Сб-Вс: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-light mb-6">Часто задаваемые вопросы</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Доставка и возврат</h3>
                  <p className="text-gray-600 text-sm">
                    Бесплатная доставка при заказе от $75. Возврат в течение 30 дней.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Гарантия</h3>
                  <p className="text-gray-600 text-sm">
                    Пожизненная гарантия на все наши гамаки и снаряжение.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Поддержка</h3>
                  <p className="text-gray-600 text-sm">
                    Наша команда поддержки готова помочь вам 24/7.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Bundle Pricing Page
export const BundlePage = () => {
  const bundles = [
    {
      id: 1,
      name: "Starter Bundle",
      description: "Идеально для начинающих кемперов",
      price: 249.99,
      originalPrice: 299.99,
      savings: 50,
      image: "https://images.unsplash.com/photo-1697150474295-b8aec4f8ffe7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxoYW1tb2NrJTIwY2FtcGluZ3xlbnwwfHx8fDE3NTA5MDM1MDd8MA&ixlib=rb-4.1.0&q=85",
      includes: [
        "Ultralight Hammock",
        "Tree Straps",
        "Stuff Sack",
        "Setup Instructions"
      ]
    },
    {
      id: 2,
      name: "Complete System",
      description: "Все необходимое для комфортного кемпинга",
      price: 449.99,
      originalPrice: 549.99,
      savings: 100,
      image: "https://images.unsplash.com/photo-1596742910522-4e3f36ebb393?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxjYW1waW5nJTIwd2lsZGVybmVzc3xlbnwwfHx8fDE3NTA5MDM1MjV8MA&ixlib=rb-4.1.0&q=85",
      popular: true,
      includes: [
        "Premium Hammock",
        "Insulation Quilt",
        "Rain Tarp",
        "Tree Straps & Hardware",
        "Bug Net",
        "Pillow"
      ]
    },
    {
      id: 3,
      name: "Pro Explorer",
      description: "Профессиональный набор для экстремальных условий",
      price: 699.99,
      originalPrice: 849.99,
      savings: 150,
      image: "https://images.pexels.com/photos/31501018/pexels-photo-31501018.jpeg",
      includes: [
        "All-Weather Hammock",
        "Premium Down Quilt",
        "Ultralight Tarp",
        "Complete Suspension System",
        "Bug Net with Full Coverage",
        "Ground Sheet",
        "Repair Kit",
        "Carrying Bag"
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            НАБОРЫ СНАРЯЖЕНИЯ
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Сэкономьте деньги, покупая полные комплекты снаряжения. 
            Все необходимое для идеального кемпинга в одном наборе.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {bundles.map((bundle, index) => (
            <motion.div
              key={bundle.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden relative ${
                bundle.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              {bundle.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm font-medium">
                  САМЫЙ ПОПУЛЯРНЫЙ
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img
                  src={bundle.image}
                  alt={bundle.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  СКИДКА ${bundle.savings}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-medium text-gray-900 mb-2">
                  {bundle.name}
                </h3>
                <p className="text-gray-600 mb-4">{bundle.description}</p>
                
                <div className="flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-blue-600">
                    ${bundle.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through ml-3">
                    ${bundle.originalPrice}
                  </span>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-3">В комплект входит:</h4>
                  <ul className="space-y-2">
                    {bundle.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-300 ${
                  bundle.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-900 text-white hover:bg-blue-600'
                }`}>
                  Выбрать набор
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          className="bg-white rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-light text-gray-900 mb-6 text-center">
            Преимущества наборов
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">%</span>
              </div>
              <h3 className="font-medium mb-2">Экономия</h3>
              <p className="text-gray-600 text-sm">До $150 скидки на комплекты</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-medium mb-2">Совместимость</h3>
              <p className="text-gray-600 text-sm">Все компоненты идеально подходят друг другу</p>
            </div>
            <div className="text-center">
              <Truck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-medium mb-2">Доставка</h3>
              <p className="text-gray-600 text-sm">Бесплатная доставка всех наборов</p>
            </div>
            <div className="text-center">
              <RefreshCw className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-medium mb-2">Гарантия</h3>
              <p className="text-gray-600 text-sm">Расширенная гарантия на весь набор</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Learn Page
export const LearnPage = () => {
  const articles = [
    {
      id: 1,
      title: "Как выбрать идеальный гамак",
      excerpt: "Полное руководство по выбору гамака для ваших потребностей",
      image: "https://images.unsplash.com/photo-1697150474295-b8aec4f8ffe7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxoYW1tb2NrJTIwY2FtcGluZ3xlbnwwfHx8fDE3NTA5MDM1MDd8MA&ixlib=rb-4.1.0&q=85",
      readTime: "5 мин",
      category: "Руководства"
    },
    {
      id: 2,
      title: "Лучшие места для кемпинга с гамаком",
      excerpt: "Откройте для себя идеальные локации для отдыха на природе",
      image: "https://images.unsplash.com/photo-1596742910522-4e3f36ebb393?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxjYW1waW5nJTIwd2lsZGVybmVzc3xlbnwwfHx8fDE3NTA5MDM1MjV8MA&ixlib=rb-4.1.0&q=85",
      readTime: "8 мин",
      category: "Места"
    },
    {
      id: 3,
      title: "Уход за снаряжением",
      excerpt: "Как продлить жизнь вашего кемпингового снаряжения",
      image: "https://images.pexels.com/photos/31501018/pexels-photo-31501018.jpeg",
      readTime: "4 мин",
      category: "Уход"
    }
  ];

  const tips = [
    {
      title: "Правильная установка",
      description: "Установите гамак под углом 30 градусов для максимального комфорта"
    },
    {
      title: "Выбор места",
      description: "Ищите деревья на расстоянии 12-15 футов друг от друга"
    },
    {
      title: "Безопасность",
      description: "Проверяйте все крепления перед каждым использованием"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            ОБУЧЕНИЕ
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Изучите все тонкости кемпинга с гамаками. Советы экспертов, 
            руководства и лучшие практики для незабываемых приключений.
          </p>
        </motion.div>

        {/* Featured Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Рекомендуемые статьи</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Читать далее →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <motion.div
          className="bg-white rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-light text-gray-900 mb-6 text-center">
            Быстрые советы
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};