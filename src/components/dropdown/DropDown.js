import React, { useState } from 'react'

export const DropDown = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelection = (option) => {
    onSelect(option)
    setIsOpen(false)
  }

  //(o) => !o => Se fossemos toggla
  return (
    <>
      <button onClick={() => setIsOpen(true)} >{title}</button>
      {isOpen && (
        <ul role="menu">
          {options.map(option => (
            <li 
              key={option} 
              onClick={() => handleSelection(option)}
              role="menuitem"
            >
                {option}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
