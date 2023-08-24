import { useEffect, useState } from 'react'
import axios from 'axios';

import {Header} from "../components/Header";

import '../css/teams.css';

import teamRed from '../images/teams/CartonesCity.jpg';
import { Player } from "../components/Player";

export const Team6 = () => {
   const [player, setPlayer] = useState([]);
   
   useEffect(() => {
      getPlayer();

      setInterval(() => {
         getPlayer();
      }, 10000)
   }, [])

   const getPlayer = async () => {
      const py = await axios(`https://apitorneoliga.onrender.com/api/viewTeam1/6`);
      setPlayer(py.data);
   }

   return(
      <>
         <div className="team">
            <div className="BannerHome">
               <img src={teamRed} />
            </div>
         </div>

         <Header />

         <Player
            player = {player}
         />
      </>
   )
}