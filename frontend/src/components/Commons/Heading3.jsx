import React from 'react'

const Heading3 = ({ black1, blue, black2 }) => {
    return (
        <h1 className='font-extrabold font-lemonmilk w-4/5 bg-clip-text text-transparent bg-[linear-gradient(90deg,_#434242_25.4%,_#2C2C2C_78.4%,_#161616_100%)] text-4xl sm:text-5xl py-2 text-center'>
            {black1}
            <span className='font-bold bg-clip-text text-transparent bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] text-4xl sm:text-6xl'>
                {blue}
            </span>
                {black2}
        </h1>
    )
}

export default Heading3