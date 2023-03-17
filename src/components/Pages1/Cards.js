import React from 'react'

export default function Cards(props) {
    return (
        <>
            <div className="treding-cont">
                <img src={props.pic} alt='anime'/>
                <div className='treding-cont-middle'>
                    <p className='title'><b>{props.title}</b></p>
                </div>
            </div>
        </>
    )
}
