import React from 'react'
import { Stepper } from '../Stepper'
import { EventInfo } from './._components/EventInfo'

export const MainContent = () => {
  return (
    <div className='mainContent'>
        <Stepper/>
        <EventInfo/>
    </div>
  )
}
