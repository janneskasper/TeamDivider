import React, {useState, useRef, useEffect, componentDidMount} from 'react'
import CandidateList from './CandidateList.js'
import TeamDivisionResult from './TeamDivisionResult.js'
import Stack from '@mui/material/Stack'
import Spacer from '@mui/material/'


// const defaultData = [{id: uuidv4(), name: "test1", selected: false},
// {id: uuidv4(), name: "test2", selected: false},
// {id: uuidv4(), name: "test3", selected: false}]

const defaultData = []

function App() {
  const [candidates, setCandidates] = useState(defaultData)
  const [numTeams, setNumTeams] = useState(1);

  return (
    <Stack direction={'column'} spacing={0}>
      <CandidateList candidates={candidates} setCandidates={setCandidates} numTeams={numTeams} setNumTeams={setNumTeams}/>
      <TeamDivisionResult candidates={candidates} numTeams={numTeams}/>
    </Stack>
  );
}

export default App;
