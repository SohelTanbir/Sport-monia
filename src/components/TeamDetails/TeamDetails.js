import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import logo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons' 
import femaleImg from '../../img/female.png';
import maleImg from '../../img/male.png';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const TeamDetails = () => {
    const { id } = useParams();
    const [teamDetails, setTeamDetails] = useState([]);


    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamDetails(data.teams[0]))
    }, []);

    const {strLeague,strLeague2, strCountry, strSport, strGender, intFormedYear,strTeamLogo, strTwitter,strFacebook,strYoutube,strStadiumDescription,strDescriptionEN } = teamDetails;

    // team detected famale or male
    let gander= '';
    if(strGender == 'Male'){
        const gander = maleImg;
    }else{
        gander = femaleImg;
    }

    return (
        <>
        <div className="teamDetailsBanner">
            <img src={strTeamLogo} alt="logo"/>
        </div>
        <div className="teamInfo">
            <div className="team-text">
                <h2>{strLeague}</h2>
                <p>Founded: {intFormedYear}</p>
                <p>Country: {strCountry}</p>
                <p>Sport Type: {strSport}</p>
                <p>Gender: {strGender}</p>
            </div>
            <div className="team-img">
                <img src={console.log(gander)} alt="teamImage"/>
            </div>
        </div>
        <div className="teamDescription">
            <p>{strStadiumDescription}</p>

            <p>{strDescriptionEN}</p>
        </div>
        <div className="social-link">
           <ul>
               <li>
                    <a href={strTwitter}>
                        <FontAwesomeIcon className="arrowIcon" icon={faTwitter} />
                    </a>
               </li>
               <li>
                    <a href={strFacebook}>
                        <FontAwesomeIcon className="arrowIcon" icon={faFacebook} />
                    </a>
               </li>
               <li>
                    <a href={strYoutube}>
                        <FontAwesomeIcon className="arrowIcon" icon={faYoutube} />
                    </a>
               </li>
           </ul>
        </div>
        </>
    );
};

export default TeamDetails;