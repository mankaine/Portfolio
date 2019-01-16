import React from 'react'
import SquareWork from './SquareWork'
import ANTrepreneurWork from './ANTrepreneurWork'
import SectionTitle from '../common/SectionTitle'
import './WorkContainer.css'

const WorkContainer = () => {
  return (
    <div>
      <div className='projects-and-work-container'>
        <button className="anchor" id="work"></button>
        <SectionTitle text='Work' />
        <div className='work-container'>
          <SquareWork />
          <ANTrepreneurWork />
        </div>
      </div>
    </div>
  )
}

export default WorkContainer
