import React, { useContext } from 'react'
import { Context } from '../context'
import FullLoadedM from './Pages1/full-m-c-loaded'

export default function Manga() {
    const { loadingMangaData} = useContext(Context)
    return (
        <div className='universal-cont'>
        <h2>Top Manga </h2>
        <div className='anime-cont'>
            {loadingMangaData ? null : <FullLoadedM />}
        </div>
        </div>
       
    )
}
