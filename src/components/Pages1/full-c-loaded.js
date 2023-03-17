import React, { useContext } from 'react'
import { Context } from '../../context'
import Full from './full-info-cards'
import { NavLink } from 'react-router-dom'

export default function FullLoaded(props) {
    const { allData } = useContext(Context)
    return (
        allData.data.map((item,index) => {
            return (
                <NavLink to={`/searchSingleAnime/:${item.mal_id}`} key={index} >
                <Full
                    key={item.mal_id}
                    pic={item.images.jpg.image_url}
                    title={item.title}
                    episode={item.episodes}
                    genre={item.genres.map((genre, index) => {
                        const count = Object.keys(item.genres).length
                        if (index > 2) return null     
                        else if (index === count - 1) return genre.name + "." 
                        else if (count > index) {
                            if (index < 2) return genre.name + ", "
                            else return genre.name + ".."
                        }
                        return null
                    }
                    )}
                    rating={item.score}
                    year={item.year}
                />
                </NavLink>

            )
        })
    )
}
