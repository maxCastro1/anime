import React, { useContext } from 'react'
import { Context } from '../context'
import Cards from '../components/Pages1/Cards'
import { NavLink } from 'react-router-dom'

export default function CardLoadedAnime(props) {
  const { allData } = useContext(Context)
  return (
    allData.data.slice(0, 5).map((item,index) => {
      return (
        <NavLink to={`/searchSingleAnime/:${item.mal_id}`} key={index} >
          <Cards
            pic={item.images.jpg.image_url}
            title={item.title}
          />
        </NavLink>

      )
    })
  )
}

