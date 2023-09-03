import React, {useEffect, useState} from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import {v4 as uuidv4} from 'uuid'
import { Checkbox } from '@mui/material'

export default function CandidateListControls({candidates, setCandidates, 
                                                candidateInput, changeCandidateInput, 
                                                numTeams, changeNumTeams,
                                                fullSelect, handleSelectAll}) {
                                        
    function btnDeleteCallback(e){
        const unselected = candidates.filter(candidate => !candidate.selected)
        setCandidates(unselected)
    }
  
    function btnAddCallback(e){
        if (candidateInput == '') return
        setCandidates(prevCandidates => { 
            return [...prevCandidates, {id: uuidv4(), name: candidateInput, selected: false}]
        })
        changeCandidateInput("")
    }

    const handleSliderChange = (event, newValue) => {
      changeNumTeams(newValue);
    };
  
    const handleCandidateInputChange = (event, newValue) => {
        changeCandidateInput(event.target.value);
    };

    return (
        <>

        <Stack spacing={2}
                direction={'column'}
                alignItems={'flex-start'}
                justifyContent={'center'}>
                <label>Enter Name: </label>
                <Stack spacing={2} direction={'row'}>
                    <TextField 
                        type='text'
                        value={candidateInput || ''}
                        onChange={handleCandidateInputChange}
                    />
                    <Button variant="contained" color='inherit' onClick={btnAddCallback}>Add</Button>
                </Stack>
                <Stack spacing={2} 
                        direction={'row'} 
                        alignContent={'flex-start'} 
                        justifyContent={'center'}>
                    <label>Number Teams:</label>
                    <Slider
                        value={numTeams || 1}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        size='small'
                        min={1}
                        max={candidates == null ? 1: candidates.length}
                        style={{width: 100}}
                        color='primary'
                    />
                    <label>{numTeams}</label>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'}>
                    <Checkbox value={fullSelect} onChange={handleSelectAll}></Checkbox>
                    <Button variant="contained" size='small' color='error' onClick={btnDeleteCallback}>Delete</Button>
                </Stack>
        </Stack>
    </>
  )
}
