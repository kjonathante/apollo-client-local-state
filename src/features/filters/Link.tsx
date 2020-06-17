import React from 'react'

interface Props {
  isDisabled: boolean
  onClick: () => void
}

const Link: React.FC<Props> = ({ children, isDisabled, onClick }) => (
  <button disabled={isDisabled} onClick={onClick}>
    {children}
  </button>
)

export default Link
