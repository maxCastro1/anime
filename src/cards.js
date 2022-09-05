import React from 'react'

export default function card(props) {
    return (
        <>
            <div className="treding-cont">
                <img src={props.pic} alt='anime' />
                <div className='treding-cont-middle'>
                    <p className='title'>{props.title}</p>
                    <span className='episode'>Episode: {props.episode}</span>
                    <span className='genre'>Gerne: {props.genre}</span>
                    <div className='treding-cont-lower'>
                        <span className='score'>Rating: {props.rating}</span>
                        <span className='year'>Year: {props.year}</span>
                    </div>
                </div>
            </div>
        </>
    )
}