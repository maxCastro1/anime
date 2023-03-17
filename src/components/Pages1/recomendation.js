import React, { useContext, useState } from "react";
import { Context } from '../../context'
export default function Recommedation({ entry, content, user, date,}){

    const { loadingRecommedations } = useContext(Context)
    let reminder, hourMin, monthDate;
    const readTime = (time) => {
        monthDate = time.split("T")[0]
        reminder = time.split('T')[1]
        hourMin = reminder.split('+')[0]
    }
    if (!loadingRecommedations) {
        readTime(date)
    }


    const [readMore, setReadMore] = useState(false)

    return (
 
        <div className="recommedation-cont" >
            <div className="recommedation-cont-upper">
                <h4 className="recommedation-cont-upper-title">Animes : </h4>
                <div className="anime-entries">
                {entry.map((item, index) => {
                    return (
                    <div key={index} className="anime-entry">
                        <img src={item.images.jpg.image_url} alt="" />
                        <p >{item.title} </p>
                    </div>
                    )
                })}
                </div>
                <h4 className="decription">Description</h4>
                <div className="recommedation-content">
                {content.length < 100 ? <p>{content}</p> :<p>
                        {readMore ? content : `${content.substring(0, 100)}...`}
                        <button className="read-more" onClick={() =>setReadMore(!readMore) }>
                            {readMore? 'show less' : 'read more'}
                        </button>
                    </p>}
                   </div>
            </div>
            <div className="recommedation-cont-lower">
                <span>~{user.username}</span>
                <span className="time">{hourMin}  {monthDate}</span>
            </div>
        </div>
    )

}