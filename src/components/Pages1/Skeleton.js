import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Skeletons() {
    return (
         <div className="x">
             <Skeleton width={"150px"} height ={350}/>
             <Skeleton  width={"150px"} height ={350}/>
             <Skeleton  width={"150px"} height ={350}/>
             <Skeleton  width={"150px"} height ={350}/>
             <Skeleton  width={"150px"} height ={350}/>
        </div>
      
    )
}