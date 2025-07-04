import React, { useState } from 'react'

export const ManagedComponent = () => {
  const [value, setValue] = useState('Инпут');

  return (
    <div>

      <h1>{value}</h1>
    
      {/* УПРАВЛЯЕМЫЙ КОМПОНЕНТ */}
      <input 
        type="text" 
        value={value}
        onChange = { e => setValue(e.target.value)}
      />
    
    </div>
  )
}
