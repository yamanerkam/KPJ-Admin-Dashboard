import React from 'react'
import { useNavigate, Link } from "react-router-dom";


const navigate = useNavigate()
export const handleClickEdit = (id) => {
    navigate(`/blog/edit/${id}`)
}