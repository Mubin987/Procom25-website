import React from 'react';
import Heading1 from '../Commons/Heading1';
import Heading2 from '../Commons/Heading2';

const Card = ({ text, number }) => (
    <div className='bg-white p-4 rounded-[2.3rem] [box-shadow:7px_3px_11px_0px_#00000026] flex flex-col items-center justify-center gap-2 min-w-[200px] h-[200px]'>
        <h3 className='font-bold text-8xl bg-clip-text text-transparent bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)]'>
            {number}
        </h3>
        <h3 className='font-medium text-lg bg-clip-text text-transparent bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)]'>
            {text}
        </h3>
    </div>
);

const OurLegacy = () => {
    return (
        <section className='w-full flex flex-col items-center justify-center gap-2 my-5 p-4'>
            <Heading1 text='OUR LEGACY' />
            <Heading2 text="PROCOM'24 STATISTICS" />
            <div className='flex flex-wrap gap-4 w-full justify-center items-center my-4'>
                {[
                    { text: 'COMPETITIONS', number: '30' },
                    { text: 'TEAMS', number: '107' },
                    { text: 'PARTICIPANTS', number: '500' },
                    { text: 'COMPANIES', number: '40' },
                ].map((item, index) => (
                    <Card key={index} text={item.text} number={item.number} />
                ))}
            </div>
        </section>
    );
};

export default OurLegacy;
