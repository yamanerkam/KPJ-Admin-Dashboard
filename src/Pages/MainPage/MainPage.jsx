import React, { useContext } from "react";
import './MainPage.css'
import { Outlet } from "react-router-dom";


export default function MainPage() {

    return (
        <>

            <div className="main-page">

                <div>
                </div>
                <Outlet />
            </div>

        </>

    )
}
