import React from "react";
import Button from "../../components/atoms/button/Button";

interface RestApiGetProps{
    onClick: ()=>void;
}

const RestApiGet = ({onClick}:RestApiGetProps) => {
    return (
        <Button onClick={onClick}>GET</Button>
    )
}

export default RestApiGet