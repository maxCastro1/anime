import React , {useContext} from "react";
import {Context} from "../context"
export default function News(){
    const {newsData,loadingNews} = useContext(Context)
    
    return(
            newsData.data.map((item)=>{ 
                return(
               <div key={item.mal_id} className="ok">
                <div className="news" > 
                 <h5 className="user-name">~{item.author_username}</h5>
                 <p className="news-title"><b>{item.title}</b></p>
                 <p className="news-body">{item.excerpt}</p>
                 <span className="news-date">{item.date}</span>
                  </div>
               </div>
                )}
           
        )
        )
}