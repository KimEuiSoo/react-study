import React, {useEffect, useState} from "react";
import {initUsers, UserData} from "../interface/UserInfo";
import axios from "axios";
import UserInfo from "../components/organisms/api/UserInfo";

const RestApiPage = () => {
    // 설정해서 초기화 되게 설정 해준다.
    const [users, setUsers] = useState<UserData[]>(initUsers);
    const [isUsers, setIsUsers] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>(undefined);


    useEffect(() => {
        // 마운트 될때 error 와 user 를 초기화 해준다.
        setError(undefined);
        setIsUsers(false);
        setUsers(initUsers);
        // loading 상태를 true 로 하여 데이터를 받기 전까지 loading 화면을 보여준다.
        setLoading(true);
        // get 으로 해당 url 을 호출하여 조회를 시작한다.
        axios.get(
            'https://jsonplaceholder.typicode.com/users'
        ).then(function (response) {    // response 에 데이터 값을 받는다.
            setIsUsers(true);
            setLoading(false);
            setUsers(response.data);  // 오류가 발생하지 않았다면 user 에 response 값을 담아준다.
        }).catch(function (error) {
            setLoading(false);
            setError(error);
        });
    },[])

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;

    return (
        <div>
            {isUsers && (
                <UserInfo users={users}/>
            )}
        </div>
    )
}

export default RestApiPage