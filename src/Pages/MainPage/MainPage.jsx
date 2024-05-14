import React, { useContext } from "react";
import './MainPage.css'
import Card from "../../Components/Card";
import re from './react.svg'
import { useNavigate, Link } from "react-router-dom";
import { BlogData as blogs } from "./BlogData";


export default function MainPage() {
    const navigate = useNavigate()
    const handleCardClick = (id) => {
        console.log(`Card with id ${id} clicked`);
        // You can also navigate to another page or perform any other action here
    };

    return (
        <>

            <div className="main-page">

                {blogs && blogs.map((blog) => (

                    <Card
                        img={re}
                        key={blog.id}
                        title={blog.title}
                        body={(blog.body).substring(0, 100)}
                        onClick={() => navigate(`/blog/${blog.id}`)}

                    />


                ))}


            </div >

        </>

    )
}
