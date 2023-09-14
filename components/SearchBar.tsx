import React from 'react';
import { SEARCH_PLACEHOLDER } from '../constant';
import SearchIcon from './svg/SearchIcon';

function SearchBar() {
  return (
    <div className='relative flex justify-center items-center'>
      <input
        type='text'
        placeholder={SEARCH_PLACEHOLDER}
        className='rounded bg-background-100
      text-secondary-200 text-sm font-normal
      border-secondary-200
      focus:outline-none focus:ring-secondary-200
      focus:border-secondary-200 focus:shadow-outline
        outline-none px-4 py-2 w-[320px]
        h-[33px] placeholder:text-secondary-200
        placeholder:text-sm placeholder:font-light'
      />
      <div className='absolute right-0 px-4 py-2 inset-y-0 flex items-center'>
        <SearchIcon className='h-[17px] w-[17px]' />
      </div>
    </div>
  );
}

export default SearchBar;
