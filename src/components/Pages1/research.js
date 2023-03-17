import React from 'react'
import FullM from './full-m-info-cards'
import Full from './full-info-cards'
import ResearchCard from './research-card'

const Research = ({prop , loading}) => {
  
  const {data} = prop
  return (
    <div className='anime-cont'>
        {(!loading && data) && data.map((res,index) => {
            return(
                <ResearchCard props={res} key={index} />      
            )
        })}
        
    </div>
  )
}

export default Research