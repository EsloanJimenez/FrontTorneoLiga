import { useEffect, useState } from "react";
import axios from "axios";

import { Header } from "../components/Header";
import { LeadersC } from "../components/LeadersC";
import { Footer } from "../components/Footer";

import '../css/home.css';

const Leaders = () => {
   const url = 'http://localhost:9000/api/'

   const [leaderPoints, setLeaderPoints] = useState([]);
   const [leaderAssists, setLeaderAssists] = useState([]);
   const [leaderRebounds, setLeaderRebounds] = useState([]);
   const [leaderStoppers, setLeaderStoppers] = useState([]);
   const [leaderRobberies, setLeaderRobberies] = useState([]);

   const [visitCounter, setVisitCounter] = useState();

   useEffect(() => {
      getLeaders();
      getCounterVisit();

      setInterval(() => {
         getLeaders();
      }, 10000)
   }, [])

   const getLeaders = async () => {
      const pt = await axios(`${url}statiPoint`);
      setLeaderPoints(pt.data);

      const as = await axios(`${url}statiAssists`);
      setLeaderAssists(as.data);

      const rbt = await axios(`${url}statiRebounds`);
      setLeaderRebounds(rbt.data);

      const st = await axios(`${url}statiStoppers`);
      setLeaderStoppers(st.data);

      const rbo = await axios(`${url}statiRobberies`);
      setLeaderRobberies(rbo.data);
   }

   const getCounterVisit = async () => {
      const vc = await axios(`${url}countVisitPage`);
      setVisitCounter(vc.data[0].visitPage);

      setCounterVisit();
   }

   const setCounterVisit = () => {
      axios.post(`${url}countVisitPage`, {
         page: 'Leaders'
      })
   }

   return (
      <>
         <Header />

         <LeadersC
            leaderPoints={leaderPoints}
            leaderAssists={leaderAssists}
            leaderRebounds={leaderRebounds}
            leaderStoppers={leaderStoppers}
            leaderRobberies={leaderRobberies}
         />

         <Footer
            visitCounter={visitCounter}
         />
      </>
   )
}

export default Leaders