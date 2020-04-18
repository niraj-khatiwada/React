import { useState } from 'react'

function useToggleState(preState) {
  // Reserves the peice of state
  const [currState, setState] = useState(preState)
  // Return new state and set toggle function
  return [currState, () => setState(!currState)]
}

export default useToggleState
