import React from "react";

interface HelloProps{
    name: string;
    age: number;
    isColor: boolean;
}

const Hello = ({ name, age, isColor }: HelloProps) => {
    const styles:{} = isColor ? {color: "skyblue"} : {};
    return (
        <div style={styles}>
            <h1>Welcome to my app</h1>
            <p>

                Hello, my name is {name} and I am {age} years old.
            </p>
        </div>
    );
}

export default Hello