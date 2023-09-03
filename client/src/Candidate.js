import React from 'react'

export default function Candidate({ candidate, selectedCallback}) {

  function handleSelected(){
    selectedCallback(candidate.id)
  }

  return (
    <div>
      <input key={Math.random} type='checkbox' checked={candidate.selected} value={candidate.selected} onChange={handleSelected}></input>
      { candidate.name }
    </div>
  )
}
