import React,{useContext} from "react";
import { Context } from '../context'
import Full from "./Pages1/full-info-cards";
const Discover = () => {
    const { radomAnime,loadingRadomAnive } = useContext(Context)
    const {data } = radomAnime

   console.log(radomAnime)
    return(
    <div className="discover-cont">
        <h1>Discover a new Anime</h1>   
       <div className="discover-cont-upper">
          {loadingRadomAnive ? null :  <Full 
            pic={data.images.jpg.image_url}
            title={data.title}
            episode={data.episodes}
            genre={data.genres.map((genre, index) => {
                const count = Object.keys(data.genres).length
                if (index > 2) return null     
                else if (index === count - 1) return genre.name + "." 
                else if (count > index) {
                    if (index < 2) return genre.name + ", "
                    else return genre.name + ".."
                }
                return null
            }
            )}
            synopsis={data.synopsis}
            rating={data.score}
            year={data.year}
      /> } 
       </div>
        
           </div>
    )
}

export default Discover