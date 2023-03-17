import React,{useContext} from 'react'
import { Context } from '../../context'
import Skeletons from '../Pages1/Skeleton'
import CardLoadedAnime from '../../pages/CardLoadedAnime'
import CardLoadedMangas from '../Pages1/CardLoadedMangas'
import Comments from '../Pages1/comments'
import { Link } from 'react-router-dom'
export default function MiddleMain() {
const {loading,loadingMangaData,loadingcommentsData} = useContext(Context)
    return (
        <div className='treding'>
            <div className='left-column'>
            <span className='body-links'><Link to='/Anime' >Anime</Link></span>
                <div className='left-column-inner-upper snaps-inline'>
                    {loading ? <Skeletons /> : < CardLoadedAnime />}
                </div>
                <span className='body-links'><Link to='/Manga' >Manga</Link></span>
                <div className='left-column-inner-lower snaps-inline'>
                    {loadingMangaData ? <Skeletons /> : <CardLoadedMangas />}
                </div>
            </div>

             <div className='right-column'>
                <p>Comments</p>
                {loadingcommentsData ? <></> : <Comments />}
            </div> 
        </div>
    )


}

