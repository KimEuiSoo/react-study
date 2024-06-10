import React from "react";
import {Box} from "@mui/material";

interface UserInfoProps{
    user: Users
}

const UserInfo = ({user}:UserInfoProps) => {
    return(
        <Box >
            <h4><b>{`유저 이름 : ${user.userName}, 유저 번호 : ${user.userPhoneName}`}</b></h4>
        </Box>
    )
}

export interface Users{
    inputId?: string,
    role?: string,
    userName?: string,
    userPhoneName?: string,
    email?: string,
}

export default UserInfo