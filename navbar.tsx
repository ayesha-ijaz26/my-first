import React from 'react';
import { FaSearch, FaRegUser } from "react-icons/fa"; 
import { AiOutlineShoppingCart } from "react-icons/ai"; 
import CartCountBadge from './CartCountbadge';

const Navbar = () => {
  return (
    <div className="container hidden lg:block">
      <div className="flex justify-between items-center pt-8">
        <h1 className="text-4xl font-medium">LOGO</h1>
        
        
        
        <div className="relative w-full max-w-[500px]">
          <input
            className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
            type="text"
            placeholder="Search Product..."
          />
          <FaSearch 
            className="absolute top-0 right-0 mt-4 mr-4 text-gray-500" 
            size={20}
          />
        </div>

        {/* Icons and Cart */}
        <div className="flex gap-4 items-center">
          <div className="icon_wrapper">
            <FaRegUser size={20} /> 
          </div>
          <div className="icon_wrapper relative">
            <AiOutlineShoppingCart size={20} /> 
            <CartCountBadge size="w-[20px] h-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
