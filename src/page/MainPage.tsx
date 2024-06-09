import React from "react";
import {Box} from "@mui/material";
import Button from "../components/atoms/button/Button";
import {useNavigate} from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();

    const navigateToHooks = () => {
        navigate("/hooks")
    }

    return (
        <Box>
            <Button onClick={navigateToHooks}>{`Hook 페이지 이동`}</Button>
        </Box>
    )
}

export default MainPage