import React from "react";
import {Box} from "@mui/material";
import Button from "../components/atoms/button/Button";
import {useNavigate} from "react-router-dom";

const ComponentsPage = () => {
    const navigate = useNavigate();

    const navigateToMemo = () => {
        navigate("/components/reactMemo")
    }
    return (
        <Box>
            <Button onClick={navigateToMemo}>{`React.memo() 이동`}</Button>
        </Box>
    )
}

export default ComponentsPage