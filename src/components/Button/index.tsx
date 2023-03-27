import React from 'react'

interface ButtonProps {
  label: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>
}

export default Button
