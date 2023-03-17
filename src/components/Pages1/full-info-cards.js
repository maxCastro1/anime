import React from 'react'

export default function Full(props) {
    return (
        <>
            <div className="anime-full-card ">
                        <img src={props.pic} alt='anime' />
                        <div className='anime-full-card-middle'>
                            <p className='title'><b>{props.title}</b></p>
                            <span className='episode'>Episode: {props.episode}</span>
                            <span className='genre'>Gerne: {props.genre}</span>
                            <p className='description-paragraph'>{props.synopsis}</p>
                            <div className='treding-cont-lower special'>
                                <span className='score'>Rating: {props.rating}</span>
                                <span className='year'>Year: {props.year ? props.year : "N/A"}</span>
                            </div>
                        </div>
                    </div>
                    </>
    )
   
}
