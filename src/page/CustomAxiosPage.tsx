import React, {useState} from "react";
import {Box} from "@mui/material";
import axios from "axios";
import RestApiGet from "../api/restApi/RestApiGet";
import RestApiPost from "../api/restApi/RestApiPost";
import RestApiPut from "../api/restApi/RestApiPut";
import RestApiDelete from "../api/restApi/RestApiDelete";
import UserInfo, {Users} from "../components/organisms/inquiry/UserInfo";
import Button from "../components/atoms/button/Button";
import classNames from "classnames";
import styles from './styles/CustomAxiosPage.module.scss'

const CustomAxiosPage = () => {
    const initUser: Users = {};
    const [users, setUsers] = useState<Users>(initUser);
    const [isUser, setIsUser] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string|undefined>(undefined);

    const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0b3NzMTEiLCJleHAiOjE3MTgwNDc5NDEsImtpbmQiOiJhY2Nlc3NUb2tlbiJ9.Mcx0K5BLC_deHEQzjKx7HzlsEC8e1qbmvlLGcfLKdSX-B__mYK-Q8g7UEJP6na1tAlfHmc61xMcDW_83g3Zhww";

    const handleGetEvent = () => {
        setUsers(initUser);
        setIsUser(false);
        setLoading(true);
        setError(undefined);

        axios.get("https://deamhome.synology.me/throwapi/user",{
            headers:{
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(function (response) {
            setLoading(false);
            if (response.status === 200) {
                console.log("조회 완료 되었습니다.");
                console.log(response.data);
                setUsers(response.data);
                setIsUser(true);
            } else {
                console.log("조회 실패했습니다.");
                setIsUser(false);
            }
        }).catch(function (error) {
            setLoading(false);
            setIsUser(false);
            setError(error);
            console.log(error);
        });
    }

    const handlePostEvent = () => {
        axios.post("https://deamhome.synology.me/throwapi/user",{
            headers:{
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(function (response) {
            setLoading(false);
            if (response.status === 200) {
                console.log("조회 완료 되었습니다.");
                console.log(response.data);
                setUsers(response.data);
                setIsUser(true);
            } else {
                console.log("조회 실패했습니다.");
                setIsUser(false);
            }
        }).catch(function (error) {
            setLoading(false);
            setIsUser(false);
            setError(error);
            console.log(error);
        });
    }

    const handlePutEvent = () => {
        axios.put("https://deamhome.synology.me/throwapi/store",{
            extStoreId: "0d01aa11-25cd-46c7-8577-f25788008b4b",
            storePhone: "01033332222",
            crn: "0000000000",
            latitude: 37.4945402275658,
            longitude: 126.95977107078,
            zipCode: "07027",
            fullAddress: "서울 동작구 사당로 50",
            trashType: "10000",
        },{
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(function (response) {
            if (response.status === 200) {
                console.log("수정 완료 되었습니다.");
                alert("수정 완료")
            } else {
                console.log("수정 실패했습니다.");
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    const handleDeleteEvent = () => {
        axios.put("https://deamhome.synology.me/throwapi/store",{
            extStoreId: "0d01aa11-25cd-46c7-8577-f25788008b4b",
        },{
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(function (response) {
            if (response.status === 200) {
                console.log("삭제 완료 되었습니다.");
                alert("삭제 완료")
            } else {
                console.log("삭제 실패했습니다.");
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    const handleInit = () => {
        setUsers(initUser);
        setIsUser(false);
        setError(undefined);
        setLoading(false);
    }

    if(loading) return <div>로딩중..</div>;
    if(error) return <div>에러가 발생했습니다</div>;

    return(
        <Box className={classNames(styles['rest-api-wrapper'])}>
            <RestApiGet onClick={handleGetEvent}/>
            <RestApiPost onClick={handlePostEvent}/>
            <RestApiPut onClick={handlePutEvent}/>
            <RestApiDelete onClick={handleDeleteEvent}/>
            {isUser ? (
                <Box className={classNames(styles['rest-api-wrapper__info'])}>
                    <UserInfo user={users}/>
                </Box>
            ): null}
            <Box className={classNames(styles['rest-api-wrapper__init'])}>
                <Button onClick={handleInit}>초기화</Button>
            </Box>
        </Box>
    )
}

export default CustomAxiosPage