import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ items, defaultValue, setValue, setMembers }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultValue);
  const dropdownRef = useRef(null);

  const handleItemClick = (item) => {
    setSelectedItem(item.name);
    setValue(item.name);
    setMembers(item.members)
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  })

  return (
    <div ref={dropdownRef} className={`relative w-[85%] sm:w-full md:w-[95%] lg:w-[70%] ml-3 font-lemonmilk`}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`inline-flex justify-between w-full px-4 py-2 text-[12px] sm:text-xl bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] text-white font-bold ${
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
          className="absolute w-full bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] text-white font-bold rounded-b-xl z-10 "
          role="menu"
        >
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(item)}
                className="block px-4 py-2 w-full text-[12px] sm:text-xl text-left"
                role="menuitem"
              >
                {item.name}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
