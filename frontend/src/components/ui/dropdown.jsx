import React, { useState } from "react";

const Dropdown = ({ items, defaultValue, setValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultValue);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setValue(item);
    setIsOpen(false);
  };

  return (
    <div className={`relative w-[60%] ml-3`}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`inline-flex justify-between w-full px-4 py-2 text-[13px] sm:text-[22px] bg-gradient-text text-white font-bold ${
          isOpen ? "rounded-t-xl" : "rounded-xl"}`}
      >
        {selectedItem}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute w-full bg-gradient-text text-white font-bold rounded-b-xl z-10 "
          role="menu"
        >
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(item)}
                className="block px-4 py-2 w-full text-left"
                role="menuitem"
              >
                {item}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
