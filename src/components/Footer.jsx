import React from 'react'
import { Button } from './Button'

export const Footer = () => {
  return (
    <div className='footer'>
        <Button type='secondaryButton' text='Back'/>
        <div className='buttonCollection'>
            <Button type='ternaryButton' text='Cancel'/>
            <Button type='primaryButton' text='Next'/>
        </div>
    </div>
  )
}
