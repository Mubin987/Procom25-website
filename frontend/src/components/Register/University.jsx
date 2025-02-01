import RegisterHeading from "../ui/register-headings";
import RegisterStep from "../ui/register-steps";
import uniList from "../../../public/Data/uniList.json";
import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({
    universities,
    defaultValue,
    setValue
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(defaultValue);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef(null);

    const handleItemClick = (university) => {   
        setSelectedItem(university);
        setIsOpen(false);
        setSearchTerm('');
        setValue(university);
    };

    const truncateUniversity = (name) => {
        const maxLength = "Quaid-i-Azam University, Islamabad".length;
        return name.length > maxLength ? `${name.substring(0, maxLength)}...` : name;
    };

    const filteredUniversities = universities.filter(uni => 
        uni.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 5);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchTerm('');
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative w-full sm:w-full md:w-[95%] lg:w-[86%] my-3 ml-3 font-lemonmilk">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className={`inline-flex justify-between whitespace-nowrap overflow-hidden text-ellipsis w-full px-4 py-2 mt-2 sm:mt-0 text-[14px] sm:text-[16px] bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] text-white font-bold ${isOpen ? "rounded-t-xl" : "rounded-xl"}`}
            >
                {truncateUniversity(selectedItem)}
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
                    className="absolute w-full bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] text-white font-bold rounded-b-xl z-10"
                    role="menu"
                >
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search your university"
                        className="block px-4 py-2 w-full text-[14px] sm:text-[16px] text-left bg-transparent border-b border-white/20 focus:outline-none placeholder-white/70"
                    />
                    
                    {filteredUniversities.map((university, index) => (
                        <button
                            key={index}
                            onClick={() => handleItemClick(university)}
                            className="block px-4 py-2 w-full text-[14px] sm:text-[16px] text-left hover:bg-white/10 whitespace-nowrap overflow-hidden text-ellipsis"
                            role="menuitem"
                        >
                            {truncateUniversity(university)}
                        </button>
                    ))}
                    <button
                        key="other"
                        onClick={() => handleItemClick("Other")}
                        className="block px-4 py-2 w-full text-[14px] sm:text-[16px] text-left hover:bg-white/10"
                        role="menuitem"
                    >
                        Other
                    </button>
                </div>
            )}
        </div>
    );
};

const UniversityDropDown = ({ setUniversity, universityError }) => {
    return (
        <div className="relative mb-5 mt-28 font-lemonmilk">
            <div className='relative ml-7 flex flex-col sm:flex-row w-[90%] sm:[95%] md:w-[96%] lg:w-[80%] items-center'>
                <RegisterHeading heading={"university"} textSize='text-2xl md:text-[2rem]' className='absolute -top-10 sm:-top-6 left-2 sm:left-3' />
                <div className="w-full border-t-4 border-dashed border-themeBlue " />
                {uniList &&
                    <Dropdown
                        defaultValue="UNIVERSITY"
                        universities={uniList}
                        setValue={setUniversity}
                    />}
                { universityError &&
                    <p className="absolute right-0 -bottom-[60%] text-[60%] sm:right-0 md:right-8 sm:-bottom-7 font-bold italic sm:text-base text-red-600">You must select a university!</p>
                }
                <RegisterStep step={1} />
            </div>
            <div className="pl-10 bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] bg-clip-text text-transparent font-bold">
                <p className="text-[13px] sm:text-[0.9rem] max-w-full sm:max-w-[47%] italic">
                    SELECT YOUR UNIVERSITY!
                </p>
            </div>
        </div>
    );
}

export default UniversityDropDown;