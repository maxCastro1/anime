import React, { useContext } from 'react'
import { Context } from '../../context'
import FullM from './full-m-info-cards'
import { NavLink } from 'react-router-dom'

export default function FullLoadedM(props) {
    const { mangaData } = useContext(Context)
    console.log(mangaData)
    return (
        mangaData.data.map((item,index) => {
            return (
                <NavLink to={`/searchSingleManga/:${item.mal_id}`} key={index} >
                <FullM
                    key={item.mal_id}
                    pic={item.images.jpg.image_url}
                    title={item.title}
                    episode={item.chapters}
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
