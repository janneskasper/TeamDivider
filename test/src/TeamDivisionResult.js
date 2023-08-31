import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import React, {useState} from 'react'
import { Divider, ListItem, ListItemText } from '@mui/material';


export default function TeamDivisionResult({candidates, numTeams}) {
  const [teams, setTeams] = useState()

  const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
  }; 

  function btnRandomizeTeamCallback(){
    const candidatesPerTeam = Math.floor(candidates.length / numTeams)
    const rest = candidates.length % numTeams
    const candidateCopy = shuffle([...candidates])
    var newTeams = []
    
    for (let index = 0; index < numTeams; index++) {
      newTeams.push(candidateCopy.slice(index*candidatesPerTeam, index*candidatesPerTeam+candidatesPerTeam))  
    }
    for (let index = 0; index < rest; index++) {
      newTeams[index].push(candidateCopy[numTeams*candidatesPerTeam+index])
    }

    setTeams(newTeams)
  }

  
  function renderTeams(){
    return (
      <Stack direction={'row'} spacing={3}>
        {teams.map((team, index) => (
          <>
            <List dense={false}>
              <span>Team: {index}</span>
              <Divider/>
              {
                team.map((candidate, innerIndex) => (
                  <ListItem key={innerIndex}>
                    <ListItemText primary={candidate.name}></ListItemText>
                  </ListItem>
                ))
              }
            </List>
          </>
        ))}
    </Stack>
    )
  }

  if (teams != null && teams.length > 0) {
    return (
      <>
        <Button variant="contained" size='small' color='inherit' onClick={btnRandomizeTeamCallback}>Randomize Teams</Button>
        {
          renderTeams()
          // teams.map(team => {
            // return (<List>
            //   {
            //     team.map(candidate => {
            //       <ListItem key={candidate.id}>
            //         {candidate.name}
            //       </ListItem>    
            //     })
            //   }
            // </List>)
            // return (
            //   team.map(candidate => {
            //     <p>{candidate.d}</p>
            //     console.log(team)
            //   })
            // )
          // })
          
          // <Stack direction={'column'}>
          //   <Button variant="contained" size='small' color='inherit' onClick={btnRandomizeTeamCallback}>Reroll Teams</Button>
          //   <Stack direction={'row'}>
              
          //   </Stack>
          // </Stack>  
        }
      </>
    )
  }
  return (
    <Stack direction={'row'}>
      <Button variant="contained" size='small' color='inherit' onClick={btnRandomizeTeamCallback}>Randomize Teams</Button>
    </Stack>  
  )
}

// 5:1 -> 5  
// 5:2 -> 2
// 5:3 -> 2
// 5:4 -> 2
// 5:5 -> 1
// 5:6 -> 
// 5:7 -> 
// 5:8 -> 
// 5:9 -> 

