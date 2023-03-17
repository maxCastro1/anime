import React ,{ useContext }from 'react'
import {Context} from "../context"
import Card from './cards';

export default function CardLoadedMangas (props) {
    const {mangaData} = useContext(Context)
    return (
        
        mangaData.data.map((item)=>{ 

            return (   
              <Card  
              key={item.mal_id}
              pic={item.images.jpg.image_url}
              title={item.title}
              episode={item.episodes}
              genre={item.genres.map((genre,index)=>{
                const count = Object.keys(item.genres).length
                if (index > 2 ) {
                    return null
                    }
                else if (index === count-1){
                  return genre.name + "."
                }
                
                else if (count > index ){
                    if(index < 2){
                        return genre.name + ", " 
                    }
                    else{
                        return genre.name + ".."
                } 
                }    
                return null
              } 
              )} 
              rating={item.score}
              year={item.published.prop.from.year}
              />

            )
          })
    )
}