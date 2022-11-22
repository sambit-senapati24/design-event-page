import React from 'react'

export const Button = (props) => {
    const {type, text} = props
  return (
    <div className={type}>{text}</div>
  )
}
