import React, { useContext, useState, useEffect } from "react";
import './MainPage.css'
import Card from "../../Components/Card";
import re from './react.svg'
import { useNavigate } from "react-router-dom";


export default function MainPage() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3000/api/blogs')
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                console.log(data)
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    const navigate = useNavigate()
    const handleCardClick = (id) => {
        console.log(`Card with id ${id} clicked`);
    };
    console.log(data)

    return (
        <>

            <div className="main-page">

                {data && (data.map((item) => (
                    <Card
                        id={item._id}
                        img={re}
                        key={item._id}
                        title={item.title}
                        body={(item.content).substring(0, 100)}
                        onClick={() => navigate(`/blog/${item._id}`)}

                    />
                )))}





            </div >

        </>

    )
}
