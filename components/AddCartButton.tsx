import React from 'react';
import ShoppingIcon from './svg/ShoppingIcon';

function AddCartButton() {
  return (
    <button
      type="button"
      className="w-28 h-6 bg-primary-300 text-white
      text-[12px] flex justify-center items-center rounded"
    >
      <ShoppingIcon className="w-4 h-4 mr-2" elipse={false} />
      <span>Agregar</span>
    </button>
  );
}

export default AddCartButton;
