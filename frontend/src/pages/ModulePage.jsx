import Heading1 from '@/components/Commons/Heading1';
import { modulesData } from '../../public/Data/ModulesData';
import React from 'react'
import { useParams } from 'react-router-dom'

const ModulePage = () => {
    const { moduleId } = useParams();
    const module = modulesData.find((module) => module.id === moduleId)
    if (!module) {
        return <div>Module not found</div>
    }
    return (
        <div className='w-full flex flex-col justify-center items-center gap-4'>
            <Heading1 text={module.category} />
            <div className='bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] flex flex-col gap-8 w-4/5 mx-auto rounded-[32px] sm:rounded-3xl text-white p-6 [box-shadow:11px_15px_23px_0px_#00000040]'>
                <div className='flex gap-2 justify-center sm:justify-between'>
                    <div className='w flex flex-col gap-2 items-center sm:items-start'>
                        <h1 className='bg-clip-text text-center sm:text-start text-transparent bg-[linear-gradient(90deg,_#FFFFFF_25.4%,_#A7E2FF_90%)] text-4xl font-bold'>{module.name}</h1>
                        <p className='hidden sm:inline text-lg font-semibold'>{module.text}</p>
                    </div>
                    <div className='hidden sm:flex m-auto'>
                        <img src={module.image} alt={module.name} height={400} width={400} className='w-[200px] object-cover rounded-r-3xl' />
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(90deg,_#434242_25.4%,_#2C2C2C_78.4%,_#161616_100%)] py-2'>DETAILS</h1>
                </div>
            </div>
        </div>
    )
}

export default ModulePage