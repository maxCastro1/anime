import React,{useContext} from 'react'
import { Context } from '../../context'
import { Link } from 'react-router-dom'
import Recommedation from '../Pages1/recomendation'

export default function LowerMain(props) {

    const {loadingRecommedations,recommendations} = useContext(Context)
    const { data } = recommendations

  return (
   <div className='recommedations-cont'>
    <span className='body-links'><Link to='/Manga' >Recomendations</Link></span>
     <div className='recommedations-cont-cards'>
      {loadingRecommedations ? <h3>Loading..</h3> : data.slice(0,3).map((item,index)=>{
        return(<Recommedation {...item} key={item.mal_id} index={index}/>)
      })}
      </div>
   </div>
  )


}