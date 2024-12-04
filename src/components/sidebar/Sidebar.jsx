import Category from './category/Category';
import Colors from './colors/Colors';
import Price from './price/Price';

const Sidebar = ({ handleChange }) => {
  return (
    <div className="w-[15%]  h-full fixed z-10 border-r-2 flex flex-col items-center">
      <h2 className="mb-3">Sidebar</h2>
      <Category handleChange={handleChange} />
      <Price handleChange={handleChange} />
      <Colors handleChange={handleChange} />
    </div>
  );
};

export default Sidebar;
