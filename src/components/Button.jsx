import React from 'react'

const Button = ({btnText, btnColor}) => {
  const colorClass = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    green: 'bg-green-500',
    // add more as needed
  }[btnColor] || 'bg-black'; // Default color if btnColor is not in the list

  return (
    <a href="#" className={`${colorClass} p-2 px-3 text-white text-sm -mt-2 rounded-xl`}>
      {btnText}
    </a>
  );
}

export default Button;
