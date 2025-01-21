import { Link } from "react-router-dom";
import RegisterHeading from "../ui/register-headings";
import { useEffect, useRef, useState } from "react";

const Dropdown = ({ items, defaultValue, setValue }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(defaultValue);
    const dropdownRef = useRef(null);
    
    const getDepartmentName = (depart) => {
        if (depart === "CS") return "Computer Science";
        if (depart === "AI") return "Artificial Intelligence";
        if (depart === "EE") return "Electrical Engineering";
        if (depart === "Business") return "Business"
        if (depart === "General") return "General"
        return depart;
    }

    const handleItemClick = (item) => {
      setSelectedItem(`${getDepartmentName(item.name)}${" Competitions"}`);
      setValue(item.name);
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
          className={`inline-flex justify-between w-full px-4 py-2 text-[12px] sm:text-[16px] bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] text-white font-bold ${
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
                  className="block px-4 py-2 w-full text-[12px] sm:text-[16px] text-left"
                  role="menuitem"
                >
                  {getDepartmentName(item.name)}{" Competitions"}
                </button>
              ))}
          </div>
        )}
      </div>
    );
  };
  

const Department = ({ setDepartment, departError }) => {
    
    return (
        <div className="relative pl-10 mb-5 mt-20 font-lemonmilk">
            <RegisterHeading heading={"department"} textSize='text-2xl' />
            <div className='absolute left-4 top-7 md:left-6 flex w-[90%] sm:[95%] md:w-[96%] lg:w-[80%] items-center'>
                <div className="w-full border-t-4 border-dashed border-themeBlue " />
                <Dropdown 
                    defaultValue="DEPARTMENT" 
                    setValue={setDepartment} 
                    items={[
                        { name: 'CS', members: null },
                        { name: 'AI', members: null },
                        { name: 'EE', members: null },
                        { name: 'business', members: null },
                        { name: 'general', members: null },
                    ]}     
                />
                { departError &&
                    <p className="absolute right-0 -bottom-[60%] text-[60%] sm:right-0 md:right-8 sm:-bottom-7 font-bold italic sm:text-base text-red-600">You must select a department!</p>
                }
            </div>
            <div className="absolute top-[36%] sm:top-[36%] left-[-1%] flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] font-bold text-xl z-10">
                <span className="bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#D0EFFF_63.77%,_#A7E2FF_100%)] bg-clip-text text-transparent font-bold">1</span>
            </div>
            <div className="mt-5 sm:mt-7 bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] bg-clip-text text-transparent font-bold">
                <p className="text-[13px] sm:text-base max-w-[50%] italic font-lemonmilk">
                    SELECT THE DEPARTMENT OF COMPETITIONS YOU WISH TO PARTICIPATE IN, FOR MORE INFORMATION <Link to={'/modules'} className="underline">
                        CLICK HERE!
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Department;