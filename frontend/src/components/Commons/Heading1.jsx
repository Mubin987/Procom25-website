import React from 'react'

const Heading1 = ({ text, className="" }) => {
    return (
        <h1 className={'font-lemonmilk text-3xl sm:text-5xl  font-extrabold bg-clip-text text-transparent bg-[linear-gradient(90deg,_#434242_25.4%,_#2C2C2C_78.4%,_#161616_100%)] py-2 '+className}>{text}</h1>
    )
}

export default Heading1