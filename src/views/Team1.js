import { useEffect, useState } from 'react'
import axios from 'axios';

import { Header } from "../components/Header";

import '../css/teams.css';

import teamGreen from '../images/teams/TeamFogon.jpg';
import { Player } from "../components/Player";
import { Footer } from "../components/Footer";

export const Team1 = () => {
   const url = 'http://localhost:9000/api/';

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
      const py = await axios(`${url}viewTeam1/1`);
      setPlayer(py.data);
   }

   const getCounterVisit = async () => {
      const vc = await axios(`${url}countVisitPage`);
      setVisitCounter(vc.data[0].visitPage);

      setCounterVisit();
   }

   const setCounterVisit = () => {
      axios.post(`${url}countVisitPage`, {
         page: 'Team Fogon'
      })
   }

   return (
      <>
         <div className="team">
            <div className="BannerHome">
               <img src={teamGreen} />
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