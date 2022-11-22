import React from 'react'

export const SingleSelect = (props) => {
    return (
        <select name="time" id="time-dropdown" className='singleSelect'>
            <option value="nine">9:00 am</option>
            <option value="ten">10:00 am</option>
            <option value="eleven">11:00 am</option>
            <option value="twelve">12:00 am</option>
    </select>
  )
}