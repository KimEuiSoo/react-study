import React from "react";
import {UserData} from "../../../interface/UserInfo";

interface UserInfoProps{
    users: UserData[]
}

const UserInfo = ({users}: UserInfoProps) => {
    return(
        <ul>
            {users.map((user)=>(
                <li key={user.id}>
                    {`유저 이름 : ${user.username} ${user.name} 시티 : ${user.address.city}`}
                </li>
            ))}
        </ul>
    )
}

export default UserInfo