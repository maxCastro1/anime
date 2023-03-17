import React from "react";
import UpperMain from "./sub-components/upper-main";
import MiddleMain from "./sub-components/middle-main";
import LowerMain from "./sub-components/lower-main";
export default function Main() {
    return (
        <div className='body-cont'>
            <UpperMain />
            <MiddleMain/>
            <LowerMain />
        </div>
    )

}