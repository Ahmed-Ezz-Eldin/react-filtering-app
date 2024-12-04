import { useState } from 'react';
import Navbar from './components/header/Navbar';
import Products from './components/products/Products';
import Recommended from './components/recommended/Recommended';
import Sidebar from './components/sidebar/Sidebar';
// Database;
import products from './db/data';
import Card from './components/products/Card';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Input filter
  const [query, setQuery] = useState('');
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter(
    (pro) => pro.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio Filter

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Button Filter

  const handleClick = (e) => {
    setSelectedCategory(e);
  };

  const filteredData = (products, selected, query) => {
    let filteredProducts = products.slice(0);
    // filter input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, title, newPrice, company }) =>
          category === selected ||
          color === selected ||
          newPrice === selected ||
          company === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => {
        return (
          <Card
            key={Math.random() * 100}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            newPrice={newPrice}
            prevPrice={prevPrice}
          />
        );
      }
    );
  };

  const result = filteredData(products, selectedCategory, query);

  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <div className="relative ml-[15%] pl-4">
        <Navbar query={query} handleInputChange={handleInputChange} />
        <Recommended handleClick={handleClick} />
        <Products result={result} />
      </div>
    </div>
  );
};

export default App;
