import React, { useState } from 'react'

export default function useFormHooks(initValue = '') {
  const [currStateValue, setStateValue] = useState(initValue)
  return [currStateValue, (evt) => setStateValue(evt.target.value), () => setStateValue('')]
}
