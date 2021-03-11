import React from 'react';
import './Home.css';
import TeamCard from '../TeamCard/TeamCard';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {


    const [teams, setTeams] =  useState([]);
    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(response => response.json())
        .then(data => setTeams(data.teams.slice(0, 25)));
    }, []);

    return (
        <>
            <div className="banner">
                <h1>Sports Team Viewer</h1>
            </div>
            <div className="card-container">
            {
                teams.map( team => <TeamCard  team={team}/>)
            }

            </div>
        </>
       
    );
};

export default Home;