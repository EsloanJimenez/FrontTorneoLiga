export const opPtTeam1 = async (index, player, op) => {
   if(op) {
      player.points +=1;
      const newArr = [...team1];
      newArr[index] = player;
      setTeam1(newArr);

      parameters = {idStatistic: player.idStatistic, points: player.points};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
         .then(res => {
            getScore();
         });
   } else {
      player.points -=1;
      const newArr = [...team1];
      newArr[index] = player;
      setTeam1(newArr);
      
      parameters = {idStatistic: player.idStatistic, points: player.points};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
         .then(res => {
            getScore();
         })
   }
}

export const opAsTeam1 = (index, player, op) => {
   if(op) {
      player.assists +=1;
      const newArr = [...team1];
      newArr[index] = player;
      setTeam1(newArr);

      parameters = {idStatistic: player.idStatistic, assists: player.assists};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
         .then(res => {
            getScore();
         })
   } else {
      player.assists -=1;
      const newArr = [...team1];
      newArr[index] = player;
      setTeam1(newArr);
      
      parameters = {idStatistic: player.idStatistic, assists: player.assists};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   }
}

export const opRebTeam1 = (index, player, op) => {
   if(op) {
      player.rebounds +=1;
      const newArr = [...team1];
      newArr[index] = player;
      setTeam1(newArr);

      parameters = {idStatistic: player.idStatistic, rebounds: player.rebounds};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   } else {
      player.rebounds -=1;
      const newArr = [...team1];
      newArr[index] = player;
      setTeam1(newArr);
      
      parameters = {idStatistic: player.idStatistic, rebounds: player.rebounds};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   }
}

export const opStoTeam1 = (index, player, op) => {
   if(op) {
      player.stoppers +=1;
      const newArr = [...team1];
      newArr[index] = player;
      setTeam1(newArr);

      parameters = {idStatistic: player.idStatistic, stoppers: player.stoppers};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   } else {
      player.stoppers -=1;
      const newArr = [...team1];
      newArr[index] = player;
      setTeam1(newArr);
      
      parameters = {idStatistic: player.idStatistic, stoppers: player.stoppers};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   }
}

export const opRobTeam1 = (index, player, op) => {   
   if(op) {
      player.robberies +=1;
      const newArr = [...team1];
      newArr[index] = player;
      setTeam1(newArr);

      parameters = {idStatistic: player.idStatistic, robberies: player.robberies};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   } else {
      player.robberies -=1;
      const newArr = [...team1];
      newArr[index] = player;
      setTeam1(newArr);
      
      parameters = {idStatistic: player.idStatistic, robberies: player.robberies};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   }
}

export const opFauTeam1 = (index, player, op) => {   
   if(op) {
      player.faults +=1;
      const newArr = [...team1];
      newArr[index] = player;
      setTeam1(newArr);

      parameters = {idStatistic: player.idStatistic, faults: player.faults};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   } else {
      player.faults -=1;
      const newArr = [...team1];
      newArr[index] = player;
      setTeam1(newArr);
      
      parameters = {idStatistic: player.idStatistic, faults: player.faults};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   }
}

export const opPtTeam2 = (index, player, op) => {
   if(op) {
      player.points +=1;
      const newArr = [...team2];
      newArr[index] = player;
      setTeam2(newArr);

      parameters = {idStatistic: player.idStatistic, points: player.points};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   } else {
      player.points -=1;
      const newArr = [...team2];
      newArr[index] = player;
      setTeam2(newArr);
      
      parameters = {idStatistic: player.idStatistic, points: player.points};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   }
}

export const opAsTeam2 = (index, player, op) => {
   if(op) {
      player.assists +=1;
      const newArr = [...team2];
      newArr[index] = player;
      setTeam2(newArr);

      parameters = {idStatistic: player.idStatistic, assists: player.assists};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   } else {
      player.assists -=1;
      const newArr = [...team2];
      newArr[index] = player;
      setTeam2(newArr);
      
      parameters = {idStatistic: player.idStatistic, assists: player.assists};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   }
}

export const opRebTeam2 = (index, player, op) => {
   if(op) {
      player.rebounds +=1;
      const newArr = [...team2];
      newArr[index] = player;
      setTeam2(newArr);

      parameters = {idStatistic: player.idStatistic, rebounds: player.rebounds};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   } else {
      player.rebounds -=1;
      const newArr = [...team2];
      newArr[index] = player;
      setTeam2(newArr);
      
      parameters = {idStatistic: player.idStatistic, rebounds: player.rebounds};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   }
}

export const opStoTeam2 = (index, player, op) => {
   if(op) {
      player.stoppers +=1;
      const newArr = [...team2];
      newArr[index] = player;
      setTeam2(newArr);

      parameters = {idStatistic: player.idStatistic, stoppers: player.stoppers};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   } else {
      player.stoppers -=1;
      const newArr = [...team2];
      newArr[index] = player;
      setTeam2(newArr);
      
      parameters = {idStatistic: player.idStatistic, stoppers: player.stoppers};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   }
}

export const opRobTeam2 = (index, player, op) => {   
   if(op) {
      player.robberies +=1;
      const newArr = [...team2];
      newArr[index] = player;
      setTeam2(newArr);

      parameters = {idStatistic: player.idStatistic, robberies: player.robberies};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   } else {
      player.robberies -=1;
      const newArr = [...team2];
      newArr[index] = player;
      setTeam2(newArr);
      
      parameters = {idStatistic: player.idStatistic, robberies: player.robberies};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   }
}

export const opFauTeam2 = (index, player, op) => {   
   if(op) {
      player.faults +=1;
      const newArr = [...team2];
      newArr[index] = player;
      setTeam2(newArr);

      parameters = {idStatistic: player.idStatistic, faults: player.faults};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   } else {
      player.faults -=1;
      const newArr = [...team2];
      newArr[index] = player;
      setTeam2(newArr);
      
      parameters = {idStatistic: player.idStatistic, faults: player.faults};
            
      fetch(urlOp + player.idStatistic, {
         method: 'PUT',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(parameters)
      }).then(res => res.text())
      .then(res => {
         getScore();
      })
   }
}