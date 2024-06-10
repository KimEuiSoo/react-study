import React from "react";
import Button from "../../components/atoms/button/Button";

interface RestApiDeleteProps{
    onClick: ()=>void;
}

const RestApiDelete = ({onClick}:RestApiDeleteProps) => {
    return(
        <Button onClick={onClick}>DELETE</Button>
    )
}

export default RestApiDelete