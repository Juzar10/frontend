import { data } from "autoprefixer";
import React from "react";

function CartItemCart({ title, quantity, coverImg, price, author }) {
  return (
    <div className="flex items-center px-6 py-5 -mx-8 hover:bg-gray-100">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={coverImg} alt="" />
        </div>
        <div className="flex flex-col justify-between flex-grow ml-4">
          <span className="text-sm font-bold">{title}</span>
          <span className="text-xs text-red-500">{author}</span>
          <a
            href="#"
            className="text-xs font-semibold text-gray-500 hover:text-red-500"
          >
            Remove
          </a>
        </div>
      </div>
      <div className="flex justify-center w-1/5">{quantity}</div>
      <span className="w-1/5 text-sm font-semibold text-center">${price}</span>
      <span className="w-1/5 text-sm font-semibold text-center">
        ${quantity * price}
      </span>
    </div>
  );
}

export default CartItemCart;
