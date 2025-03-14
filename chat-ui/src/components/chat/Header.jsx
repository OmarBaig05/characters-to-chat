import React from 'react';
import { Link } from 'react-router-dom';
import { User, DollarSign } from 'lucide-react';

const Header = ({ userBalance }) => {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-black/70 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/games" className="text-santa-600 font-serif text-2xl font-bold">
            AI Arena
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center px-4 py-2 bg-gray-800/80 rounded-lg">
            <DollarSign className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="font-medium">{userBalance} Flare</span>
          </div>
          
          <div className="flex items-center bg-gray-800/80 rounded-full p-1 px-3">
            <div className="bg-gray-700 rounded-full p-1 mr-2">
              <User className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium">You</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;