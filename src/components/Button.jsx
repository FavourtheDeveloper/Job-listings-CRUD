import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({btnText, btnColor, dest}) => {
  const colorClass = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    green: 'bg-green-500',
    // add more as needed
  }[btnColor] || 'bg-black'; // Default color if btnColor is not in the list

  return (
    <Link to={dest} className={`${colorClass} p-2 px-3 text-white text-sm -mt-2 rounded-xl`}>
      {btnText}
    </Link>
  );
}

export default Button;
