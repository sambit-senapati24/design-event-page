import React from 'react'

import { isCurrentDaySelected } from '../lib/helper'

export const AvailableDaysSelector = (props) => {

    const {availabilityDaysOptions,selectedDayOptions} = props
    return (
        <div className='daysContainer'>{availabilityDaysOptions?.map((day, index) => {
            return (
                <div key={index + day?.id} className={`day ${isCurrentDaySelected(day?.id, selectedDayOptions) ? 'activeDay' : 'inactiveDay'}`}>
                    <span>{day?.label}</span>
                </div>
            )
        })}
        </div>
    )
}