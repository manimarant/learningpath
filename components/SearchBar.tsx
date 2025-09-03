
import React from 'react';
import SearchIcon from './icons/SearchIcon';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSubmit, isLoading }) => {
  return (
    <form onSubmit={onSubmit} className="w-full max-w-2xl">
      <div className="flex items-center border border-gray-300 rounded-full shadow-sm focus-within:ring-2 focus-within:ring-black focus-within:border-black transition-all duration-200 bg-white">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="e.g., Artificial Intelligence, Marine Biology, Digital Arts..."
          className="w-full px-6 py-4 text-lg text-gray-800 bg-transparent border-none rounded-full focus:outline-none focus:ring-0"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="m-2 p-3 bg-black text-white rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <SearchIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
