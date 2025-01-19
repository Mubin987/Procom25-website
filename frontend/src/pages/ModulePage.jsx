import { modulesData } from '../../public/Data/ModulesData';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Hero from '@/components/Register/Hero'
import SingleCompetition from '@/components/Modules/SingleCompetition'

const ModulePage = () => {
    const [competitions, setCompetitions] = useState(modulesData);
    const { moduleId } = useParams();
    const module = competitions.find((module) => module._id == moduleId)
    if (!module) {
        return <div>Module not found</div>
    }
    return (
        <>
        {/* <Hero/> */}
        <SingleCompetition module={module}/>
        </>
    )
}

export default ModulePage