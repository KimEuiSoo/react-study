import React from "react";
import {Box} from "@mui/material";
import Button from "../components/atoms/button/Button";
import { useNavigate } from "react-router-dom";
import styles from './styles/HooksPage.module.scss'

const HooksPage = () => {
    const navigate = useNavigate();

    const NavigateToHooks = (tag:string) => {
        navigate(`/hooks/${tag}`)
    }

    return (
        <Box className={styles['hook-wrapper']}>
            <Button onClick={()=>NavigateToHooks&&NavigateToHooks('useState')}>{`UseState`}</Button>
            <Button onClick={()=>NavigateToHooks&&NavigateToHooks('useEffect')}>{`UseEffect`}</Button>
            <Button onClick={()=>NavigateToHooks&&NavigateToHooks('useEffectDeps')}>{`UseEffectDeps`}</Button>
            <Button onClick={()=>NavigateToHooks&&NavigateToHooks('useRef')}>{`UseRef`}</Button>
            <Button onClick={()=>NavigateToHooks&&NavigateToHooks('useRef2')}>{`UseRef2`}</Button>
            <Button onClick={()=>NavigateToHooks&&NavigateToHooks('useRef3')}>{`UseRef3`}</Button>
            <Button onClick={()=>NavigateToHooks&&NavigateToHooks('useMemo')}>{`ParentUseMemo`}</Button>
            <Button onClick={()=>NavigateToHooks&&NavigateToHooks('useCallback')}>{`UseCallback`}</Button>
            <Button onClick={()=>NavigateToHooks&&NavigateToHooks('useContext')}>{`UseContext`}</Button>
            <Button onClick={()=>NavigateToHooks&&NavigateToHooks('useReducer')}>{`UseReducer`}</Button>
        </Box>
    )
}

export default HooksPage