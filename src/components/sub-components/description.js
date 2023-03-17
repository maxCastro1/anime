import React,{useState} from "react";

export default function Description(props){
    const [readMore,setReadMore] = useState(false)

    return(
        <div>
            {readMore ? props.substring(0,200) : props} 
            <button onClick={()=> setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
            </button>
        </div>
    )
}