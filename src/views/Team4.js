import { useEffect, useState } from 'react'
import axios from 'axios';

import { Header } from "../components/Header";

import '../css/teams.css';

import teamWhite from '../images/teams/CentroTiaRosa.jpg';
import { Player } from "../components/Player";
import { Footer } from "../components/Footer";

export const Team4 = () => {
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
      const py = await axios(`${url}viewTeam1/4`);
      setPlayer(py.data);
   }

   const getCounterVisit = async () => {
      const vc = await axios(`${url}countVisitPage`);
      setVisitCounter(vc.data[0].visitPage);

      setCounterVisit();
   }

   const setCounterVisit = () => {
      axios.post(`${url}countVisitPage`, {
         page: 'Centro Tia Rosa'
      })
   }

   return (
      <>
         <div className="team">
            <div className="BannerHome">
               <div id="court"><img src={teamWhite} /></div>
            </div>
         </div>

         <Header />

         <Player
            player={player}
         />

         <Footer
            visitCounter={visitCounter}
         />
      </>
   )
}