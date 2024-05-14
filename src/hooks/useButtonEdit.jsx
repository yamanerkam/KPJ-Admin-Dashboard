import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useButtonEdit = () => {
    const navigate = useNavigate();

    const handleClickEdit = (id) => {

        navigate(`/blog/edit/${id}`);


    };

    return handleClickEdit;
};

export default useButtonEdit;
