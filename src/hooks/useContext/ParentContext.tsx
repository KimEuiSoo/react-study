import React, { createContext } from "react";
import UseContext from "./UseContext";

export interface User {
    id: number;
    user: string;
    content: string;
}

export const parentContext = createContext<User | undefined>(undefined);

const ParentContext = () => {
    const user: User = {
        id: 110,
        user: "홍길동",
        content: "아버지를 아버지라 못하고 형을 형이라 부르지 못하니",
    };
    return (
        <>
            <parentContext.Provider value={user}>
                <div>
                    <UseContext />
                </div>
            </parentContext.Provider>
        </>
    );
};

export default ParentContext;
