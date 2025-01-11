import { modulesData } from '../../public/Data/ModulesData';
import React from 'react'
import { useParams } from 'react-router-dom'
import Hero from '@/components/Register/Hero'
import SingleCompetition from '@/components/Modules/SingleCompetition'

const ModulePage = () => {
    const { moduleId } = useParams();
    const module = modulesData.find((module) => module.id === moduleId)
    if (!module) {
        return <div>Module not found</div>
    }
    return (
        <>
        <Hero/>
        <SingleCompetition module={module}/>
        </>
    )
}

export default ModulePage