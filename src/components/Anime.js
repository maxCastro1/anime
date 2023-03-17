import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../context'
import FullLoaded from './Pages1/full-c-loaded'
import Full from './Pages1/full-info-cards';
import { NavLink } from 'react-router-dom'

export default function Anime() {

    const { loading, allData } = useContext(Context)
    const [genre, setGenre] = useState([])
    const [displayingData, setDisplayData] = useState([])


    useEffect(() => {
       setDisplayData([])
        if(!loading){
        allData.data.map((item) => {
                item.genres.map((list) => {
                    if (list.name === genre) {
                        return setDisplayData(pre =>([...pre, item]))   
                    }
                     return list
                })               
           return item })
            console.log(displayingData)
        }
        
    }, [genre]);


return (
    <div className='universal-cont'>
        <h2>Top Anime </h2>
        <div className='anime-genre-cont'>
            <label>sort by Gerne</label>
            <div className='anime-genre-cont-items-cont'>
                <div className='anime-genre-cont-items'>
                    {genre.length > 0 ? <button className='anime-genre-cont-item' onClick={() => setGenre("")}>
                        <p>All</p>
                    </button> : null}
                    <button className='anime-genre-cont-item' onClick={() => setGenre("Action")}>
                        <p>Action</p>
                    </button>
                    <button className='anime-genre-cont-item' onClick={() => setGenre("Adventure")}>
                        <p>Adventure</p>
                    </button>
                    <button className='anime-genre-cont-item' onClick={() => setGenre("Fantasy")}>
                        <p>Fantasy</p>
                    </button>
                    <button className='anime-genre-cont-item' onClick={() => setGenre("Drama")}>
                        <p>Drama</p>
                    </button>
                    <button className='anime-genre-cont-item' onClick={() => setGenre("Supernatural")}>
                        <p>Supernatural</p>
                    </button>
                    <button className='anime-genre-cont-item' onClick={() => setGenre("Horror")}>
                        <p>Horror</p>
                    </button>
                    <button className='anime-genre-cont-item' onClick={() => setGenre("Romance")}>
                        <p>Romance</p>
                    </button>
                    <button className='anime-genre-cont-item' onClick={() => setGenre("Sci-Fi")}>
                        <p>Sci-Fi</p>
                    </button>
                </div>
            </div>
        </div>

        <div className='anime-cont'>
            {genre.length > 0 ? 
            displayingData.map((item,index)=>{
                return(
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
            : loading ? <h1>Loading ...</h1> : <FullLoaded />}

        </div>
    </div>

)
}
