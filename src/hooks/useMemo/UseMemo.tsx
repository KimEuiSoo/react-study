import React, { useMemo } from 'react';
import {createUser, filterUser} from './Util';

interface UseMemoProps{
    type: 'all' | 'active' | 'completed';
}

const UseMemo = ({type}: UseMemoProps) => {
    const users=createUser()

    const userTodos = useMemo(()=> {
        return filterUser(users,type)
    },[users])

    return (
        <div>
            <ul>
                {userTodos.map(user => (
                    <li key={user.id}>
                        {user.completed ?
                            <s>{user.name}</s> :
                            user.name
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UseMemo