import React from 'react';
import './TeamCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons' 
import { useHistory } from 'react-router';

const TeamCard = (props) => {
    const team = props.team;
    let history = useHistory();

    const TeamDetails = id =>{
        const url = `/team/details/${id}`;
        history.push(url);
    }
    return (
        <div>
            <div className="sport-card">
                <img src={team?.strTeamLogo} alt="logo"/>
                    <h3>{team?.strLeague2}</h3>
                    <p>Sports type: {team?.strSport}</p> 
                    <p>ID: {team?.idTeam}</p>
                     <button onClick={()=> TeamDetails(team?.idTeam)}>Explore <FontAwesomeIcon className="arrowIcon" icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default TeamCard;