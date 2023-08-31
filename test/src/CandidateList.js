import React, { useState, useEffect } from 'react'
import CandidateListControls from './CandidateListControls.js';
import Candidate from './Candidate'
import { v4 as uuidv4 } from 'uuid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Stack from '@mui/material/Stack';
import { Button, Divider } from '@mui/material';

const LOCAL_STORAGE_KEY = "team_candidates"




export default function CandidateList({ candidates, setCandidates, numTeams, setNumTeams }) {
  const [fullSelect, setFullSelect] = useState(false)
  const [candidateInput, changeCandidateInput] = useState('');

  useEffect(() => {
    const output = window.localStorage.getItem(LOCAL_STORAGE_KEY)
    setCandidates(JSON.parse(output));
    console.log('Loaded', candidates)
  }, []);
  useEffect(() => {
    console.log('Stoaring', candidates)
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(candidates));
  }, [candidates]);

  function candidateSelectedCallback(id) {
    const cands = [...candidates]
    const changedCandidate = cands.find(candidate => candidate.id === id)
    if (changedCandidate) changedCandidate.selected = !changedCandidate.selected
    setCandidates(cands)
  }

  function handleSelectAll(e) {
    const updated = [...candidates]
    updated.map(candidate => {
      candidate.selected = !fullSelect
    })
    setCandidates(updated)
    setFullSelect(!fullSelect)
  }

  return (
    <Stack spacing={0}>
      <CandidateListControls candidates={candidates} setCandidates={setCandidates}
        candidateInput={candidateInput} changeCandidateInput={changeCandidateInput}
        numTeams={numTeams} changeNumTeams={setNumTeams}
        fullSelect={fullSelect} handleSelectAll={handleSelectAll}
      />
      <Divider />
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
          candidates.map(candidate => {
            return (
              <ListItem key={candidate.id}>
                <Candidate key={candidate.id}
                  candidate={candidate}
                  selectedCallback={candidateSelectedCallback}
                  allChecked={fullSelect} />

              </ListItem>
            )
          })
        }
      </List>
      <Divider />
    </Stack>
  )
}
