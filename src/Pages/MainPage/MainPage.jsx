import React, { useContext } from "react";
import './MainPage.css'
import { Outlet } from "react-router-dom";
import Card from "../../Components/Card";


export default function MainPage() {
    const blogs = [
        {
            "title": "The Rise of Eco-Friendly Fashion",
            "body": "In recent years, the fashion industry has seen a significant shift towards eco-friendly practices. Brands are increasingly using sustainable materials and ethical production methods to reduce their environmental impact. From recycled fabrics to cruelty-free alternatives, eco-friendly fashion is not just a trend but a movement towards a more sustainable future..."
        },
        {
            "title": "10 Tips for Staying Productive While Working from Home",
            "body": "Working from home can be challenging, especially when it comes to staying productive. Here are ten tips to help you maintain your focus and efficiency. First, establish a dedicated workspace free from distractions. Second, stick to a routine to create a sense of normalcy. Third, take regular breaks to avoid burnout. Fourth, set clear goals for each day..."
        },
        {
            "title": "Exploring the Benefits of Mindfulness Meditation",
            "body": "Mindfulness meditation has gained popularity as a powerful tool for reducing stress and improving mental health. This practice involves focusing on the present moment and accepting it without judgment. Research shows that mindfulness meditation can help reduce anxiety, improve concentration, and enhance overall well-being. By practicing mindfulness regularly..."
        },
        {
            "title": "The Future of Electric Vehicles: What's Next?",
            "body": "The electric vehicle (EV) market is rapidly evolving, with advancements in technology and infrastructure driving growth. As battery technology improves, EVs are becoming more affordable and efficient, offering longer ranges and faster charging times. Governments around the world are also implementing policies to support the transition to electric mobility..."
        },
        {
            "title": "A Guide to Creating a Successful Online Business",
            "body": "Starting an online business can be a rewarding endeavor. First, identify a niche market where you can provide unique value. Conduct thorough market research to understand your target audience and competitors. Next, create a comprehensive business plan outlining your goals, strategies, and financial projections. Build a professional website with user-friendly navigation..."
        }
    ]

    return (
        <>

            <div className="main-page">
                <Card title={blogs[0].title} body={(blogs[0].body).substring(0, 100)} />

            </div>

        </>

    )
}
