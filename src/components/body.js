import React from "react";
import Navbar from "./navbar"
import Footer from "./footer";
import {Outlet } from "react-router";
import {SkeletonTheme} from 'react-loading-skeleton'
export default function Body(){
    return(
        <>
        <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
            <Navbar />
            <Outlet />
            <Footer />
        </SkeletonTheme>
        </>
    )
}
