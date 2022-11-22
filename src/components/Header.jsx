import React from 'react'

export const Header = (props) => {
    const {title, isDismissible} = props
  return (
    <div className='header'>
        <div className='title'>{title}</div>
        {isDismissible && 
        <div>
            X
        </div>
        }
    </div>
  )
}
