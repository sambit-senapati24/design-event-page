import React, {useState} from 'react'
import { MultiSelect } from "react-multi-select-component";

import { Button } from '../../Button';
import { SingleSelect } from '../../SingleSelect';
import { AvailableDaysSelector } from '../../AvailableDaysSelector';
import { durationOptions, dayOptions,  selectedDayOptions} from '../../../lib/options';


export const EventInfo = () => {
    const [selected, setSelected] = useState([]);
    const label = 'https://bookevent/events.com'

    const customValueRendererTag = (selected, _options) => {
        return selected.length
          ? <div className='multiSelectLabelWrapper'>{selected.map(({ label }) => <div className='multiSelectLabel'>{label}</div>)}</div>
          : "";
      };


  return (
    <div className='eventInfo'>
         <div>
            <h4>Event link <sup style={{color: 'red', marginLeft: '4px'}}>*</sup></h4>
            <div className='eventLinkSubInfo'>
                <label>{label}</label>
                <input className='input' type='text' value='coffee meeting'/>
            </div>
        </div>
        <div>
            <h4>Duration <sup style={{color: 'red', marginLeft: '4px'}}>*</sup></h4>
            <div className='durationSubInfo'>
                <MultiSelect
                    options={durationOptions}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                    valueRenderer={customValueRendererTag}
                />
            </div>
        </div>
        <div>
            <h4>Availability</h4>
            <div className='availabilitySubInfo'>
                <AvailableDaysSelector availabilityDaysOptions={dayOptions} selectedDayOptions={selectedDayOptions}/>
                <div>
                    <SingleSelect/>
                    <span style={{marginLeft: '8px', marginRight: '8px'}}>-</span>
                    <SingleSelect/>
                </div>
            </div>
            <Button text='Add New' type='secondaryButton'/>
        </div>
    </div>
  )
}
