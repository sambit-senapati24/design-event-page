import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { MainContent } from './MainContent'

export const EventModal = () => {
  return (
    <div className='createEventModal'>
        <Header title='Create an Event' isDismissible={true}/>
        <MainContent/>
        <Footer/>
    </div>
  )
}
