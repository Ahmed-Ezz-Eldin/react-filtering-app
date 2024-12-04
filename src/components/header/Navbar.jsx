import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
} from 'react-icons/ai';

const Navbar = ({query, handleInputChange}) => {
  return (
    <header className="shadow-sm p-4 mb-4">
      <div className="container flex justify-around">
        <input type="search" placeholder="Search for a product" onChange={handleInputChange} value={query} />
        <div className="flex justify-end items-center">
          <a href="#" className='text-2xl ps-[25px]'>
            <AiOutlineHeart />
          </a>
          <a href="#" className='text-2xl ps-[25px]'>
            <AiOutlineShoppingCart />
          </a>
          <a href="#" className='text-2xl ps-[25px]'>
            <AiOutlineUserAdd />
          </a>
        </div>
      
      </div>
    </header>
  );
};

export default Navbar;
