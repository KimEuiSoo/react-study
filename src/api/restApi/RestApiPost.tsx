import React from "react";
import Button from "../../components/atoms/button/Button";

interface RestApiPostProps{
    onClick: () => void;
}

const RestApiPost = ({onClick}:RestApiPostProps) => {
    return (
        <Button onClick={onClick}>POST</Button>
    )
}

export default RestApiPost