import React, {useEffect, useState} from "react";
import {Box, Button} from "@mui/material";
import {useMutation, useQuery} from "@apollo/client";
import {LOGIN_REQUEST} from "../api/apollo/mutation/AuthMutation.gql";
import {ALL_CATEGORY_TREE} from "../api/apollo/query/ItemQuery.gql";

const ApolloPage = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const [login] = useMutation(LOGIN_REQUEST)

    const {loading, error, refetch} = useQuery(ALL_CATEGORY_TREE)

    const onLoginHandle = () => {
        try {
            login({
                context: {
                    headers: {
                        'Authorization-mac': '00-00-00-00-00-00'
                    },
                    fetchOptions: {
                        credentials: 'include',
                    },
                },
                variables:{
                    request:{
                        pwd: '1234qwer@',
                        userId: 'asd1234',
                        sns: 'NORMAL',
                    }
                },
                onCompleted: loginSuccess,
            })
        }
        catch (error){
            console.log(error)
        }
    }

    const loginSuccess = () => {
        setIsLogin(true);
    }

    useEffect(() => {
        refetch({
            request:'01J5AAJE09VM9XQ16RF497DRAH'
        })
    }, [isLogin]);

    const onLogoutHandle = () => {
        setIsLogin(false)
    }

    if (loading) return <p>loading....</p>
    if (error) return <p>Error :(</p>
    return (
        <Box style={{marginTop:300}}>
            {isLogin ? <Button onClick={onLogoutHandle}>로그아웃</Button> :
                <Button onClick={onLoginHandle}>로그인</Button>}
        </Box>
    )
}

export default ApolloPage