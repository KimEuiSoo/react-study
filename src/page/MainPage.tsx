import React from "react";
import {Box} from "@mui/material";
import Button from "../components/atoms/button/Button";
import {useNavigate} from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();

    const navigateToPage = (page: string) => {
        navigate(`${page}`);
    }

    return (
        <Box>
            <Button onClick={()=>navigateToPage("/hooks")}>{`Hook 페이지 이동`}</Button>
            <Button onClick={()=>navigateToPage("/components")}>{`Components 페이지 이동`}</Button>
        </Box>
    )
}

export default MainPage