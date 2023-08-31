import { useEffect, useState } from 'react'
import axios from 'axios';

import {Header} from "../components/Header";

import '../css/teams.css';

import teamRed from '../images/teams/CartonesCity.jpg';
import { Player } from "../components/Player";
import { Footer } from '../components/Footer';

export const Team8 = () => {
   const url = 'https://apitorneoliga.onrender.com/api/';

   const [player, setPlayer] = useState([]);
   const [visitCounter, setVisitCounter] = useState();
   
   useEffect(() => {
      getPlayer();
      getCounterVisit();

      setInterval(() => {
         getPlayer();
      }, 10000)
   }, [])

   const getPlayer = async () => {
      const py = await axios(`${url}viewTeam1/8`);
      setPlayer(py.data);
   }

   const getCounterVisit = async () => {
      const vc = await axios(`${url}countVisitPage`);
      setVisitCounter(vc.data[0].visitPage);

      setCounterVisit();
   }

   const setCounterVisit = () => {
      axios.post(`${url}countVisitPage`, {
         page: 'Nocturnos'
      })
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

         <Footer
            visitCounter={visitCounter}
         /> 
      </>
   )
}