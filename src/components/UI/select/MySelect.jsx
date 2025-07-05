import React from 'react'
import classes from './MySelect.module.css'

export const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select 
      className={classes.sortSelect}
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option value="" disabled>{defaultValue}</option>
      { options.map(option => 
        <option value={option.value} key={option.value}>{option.name}</option>
      )}
    </select>
  )
}
