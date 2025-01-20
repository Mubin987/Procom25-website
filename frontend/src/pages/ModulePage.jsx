import { modulesData } from '../../public/Data/ModulesData';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Hero from '@/components/Register/Hero'
import SingleCompetition from '@/components/Modules/SingleCompetition'
import axios from 'axios';

const ModulePage = () => {
    const [competitionDetail, setCompetitionDetail] = useState({});
    const [competitions, setCompetitions] = useState(modulesData);
    const { moduleId } = useParams();

    useEffect(() => {
        const fetchCompetition = async () => {
            try {
                const response = await axios.get('http://localhost:3000/competition');
                const competition = response.data.find(comp => (comp.title.split(' ').join('-')) === (moduleId));
                setCompetitionDetail(competition);
            } catch (error) {
                console.error('Error fetching competition:', error);
            }
        };

        fetchCompetition();
    }, [moduleId]);

    return (
        <>
            <Hero />
            {console.log(competitionDetail)}
            {competitionDetail ? <SingleCompetition module={competitionDetail} /> : <h1>Loading...</h1>}
        </>
    )
}

export default ModulePage