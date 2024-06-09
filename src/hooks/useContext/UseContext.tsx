import React, { useContext } from "react";
import { parentContext } from "./ParentContext";

const UseContext = () => {
    const user = useContext(parentContext);
    return (
        <div>
            <h3>
                <b>
                    {`부모 컴포넌트에 전달 받은 값은`}
                    <br />
                    {`id는 ${user?.id}, 이름은 ${user?.user}, 그리고 대사는 "${user?.content}"입니다.`}
                </b>
            </h3>
        </div>
    );
};

export default UseContext;
