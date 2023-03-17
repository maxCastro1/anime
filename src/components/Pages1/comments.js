import React, { useContext } from "react";
import { Context } from '../../context'
export default function Comments() {

        const { commentsData, loadingcommentsData } = useContext(Context)
        return (
                commentsData.data.map((item) => {

                        let reminder, hourMin, monthDate;

                        const readTime = (time) => {
                                monthDate = time.split("T")[0]
                                reminder = time.split('T')[1]
                                hourMin = reminder.split('+')[0]
                                
                        }
                        if (!loadingcommentsData) {
                                readTime(item.date)
                        }
                
                        return (
                                <div key={item.mal_id} className="ok">
                                        <div className="news" >
                                                <h5 className="user-name">~{item.author_username}</h5>
                                                <p className="news-title"><b>{item.title}</b></p>
                                                <p className="news-body">{item.excerpt}</p>
                                                <span className="news-date">{hourMin}  {monthDate} </span>
                                        </div>
                                </div>
                        )
                }

                )
        )
}