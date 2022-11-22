import React from 'react'

export const Stepper = () => {
  return (
    <div className='wrapper-stepper'>
        <div class="step completed">
            <div class="v-stepper">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="content">Event info</div>
         </div>
         <div class="step active">
            <div class="v-stepper">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="content active">Event settings</div>
         </div>

         <div class="step empty">
            <div class="v-stepper">
                <div class="circle"></div>
                <div class="line"></div>
            </div>
            <div class="content">Other</div>
         </div>
    </div>
  )
}
