import React from "react";
import Button from "../../components/atoms/button/Button";

interface RestApiPutProps{
    onClick:()=>void;
}

const RestApiPut = ({onClick}:RestApiPutProps) => {
    return(
        <Button onClick={onClick}>PUT</Button>
    )
}

export default RestApiPut