import { modulesData } from '../../public/Data/ModulesData';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Hero from '@/components/Register/Hero'
import SingleCompetition from '@/components/Modules/SingleCompetition'
import axios from 'axios';

const ModulePage = () => {
    // const [competitionDetail, setCompetitionDetail] = useState(null);
    const [competitions, setCompetitions] = useState(null);
    const { moduleId } = useParams();

    const fetchCompetition = async () => {
            console.log(`Module ID: ${moduleId}`)
            axios.get(`http://localhost:3000/competitionByName/${moduleId}`)
            .then((res) => {
                setCompetitions(res.data)
            })
    };
    useEffect(() => {
        fetchCompetition()
    }, [moduleId]);

    return (
        <>
            <Hero />
            {competitions ? <SingleCompetition module={competitions} /> : <h1>Loading...</h1>}
        </>
    )
}

export default ModulePage