import React from 'react'
import SquareWork from './SquareWork'
import ANTrepreneurWork from './ANTrepreneurWork'
import SectionTitle from '../common/SectionTitle'
import './WorkContainer.css'

const WorkContainer = () => {
  return (
    <div>
      <div className='projects-and-work-container'>
        <a className="anchor" id="work"></a>
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
