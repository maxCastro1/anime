import React ,{ useContext }from 'react'
import { Context } from '../../context';
import Cards from './Cards';
import { NavLink } from 'react-router-dom'
export default function CardLoadedMangas (props) {
    const {mangaData} = useContext(Context)

    return (
        mangaData.data.slice(0,5).map((item,index)=>{ 
            return (   
              <NavLink to={`/searchSingleManga/:${item.mal_id}`} key={index} >
              <Cards  
              pic={item.images.jpg.image_url}
              title={item.title}
              />
              </NavLink>
            )
          })
    )
}