import React from 'react'

export default function FullM(props) {
    return (
        <>
            <div className="anime-full-card ">
                        <img src={props.pic} alt='anime' />
                        <div className='anime-full-card-middle'>
                            <p className='title'><b>{props.title}</b></p>
                            <span className='episode'>chapters: {props.episode ? props.episode :"N/A"}</span>
                            <span className='genre'>Gerne: {props.genre}</span>
                            <div className='treding-cont-lower special'>
                                <span className='score'>Rating: {props.rating}</span>
                                <span className='year'>Year: {props.year ? props.year : "N/A"}</span>
                            </div>
                        </div>
                    </div>
                    </>
    )
   
}
