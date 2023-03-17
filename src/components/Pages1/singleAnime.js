import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Full from "./full-info-cards";
import axios from "axios";

const SingleAnime = () => {
    const [datas, setdata] = useState([])
    const [loading, setLoading] = useState(true)

  const { searchId } = useParams();
  var result = searchId.slice(1);

    useEffect(() => {
        const handleSubmit = async () => {
          setLoading(true)
          try {
            const response = await axios.get(`http://localhost:5000/api/v1/searchSingleAnime/${result}`);
            setdata(response.data.data)
            console.log(datas)
            setLoading(false);
          } catch (error) {
            console.log(error)
            setLoading(false);
          }
        };
      handleSubmit()
        }, [])
      

    return(
    <div className="discover-cont">
        <h1>{loading ? "Loading..." : datas.title}</h1>   
        {console.log(datas)}
       <div className="discover-cont-upper">
          {loading ? null :  <Full 
            pic={datas.images.jpg.image_url}
            title={datas.title}
            episode={datas.episodes}
            genre={datas.genres.map((genre, index) => {
                const count = Object.keys(datas.genres).length
                if (index > 2) return null     
                else if (index === count - 1) return genre.name + "." 
                else if (count > index) {
                    if (index < 2) return genre.name + ", "
                    else return genre.name + ".."
                }
                return null
            }
            )}
            synopsis={datas.synopsis}
            rating={datas.score}
            year={datas.year}
      /> } 
       </div>
        
           </div>
    )
}

export default SingleAnime