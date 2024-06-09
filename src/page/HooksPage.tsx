import React from "react";
import {Box} from "@mui/material";
import Button from "../components/atoms/button/Button";
import { useNavigate } from "react-router-dom";

const HooksPage = () => {
    const navigate = useNavigate();

    const NavigateToHooks = (tag:string) => {
        navigate(`/hooks/${tag}`)
    }

    return (
        <Box>
            <Button onClick={()=>NavigateToHooks&&NavigateToHooks('useState')}>{`UseState`}</Button>
            <Button onClick={()=>NavigateToHooks&&NavigateToHooks('useEffect')}>{`UseEffect`}</Button>
            <Button onClick={()=>NavigateToHooks&&NavigateToHooks('useEffectDeps')}>{`UseEffectDeps`}</Button>
            <Button onClick={()=>NavigateToHooks&&NavigateToHooks('useRef')}>{`UseRef`}</Button>
            <Button onClick={()=>NavigateToHooks&&NavigateToHooks('useRef2')}>{`UseRef2`}</Button>
            <Button onClick={()=>NavigateToHooks&&NavigateToHooks('useRef3')}>{`UseRef3`}</Button>
            <Button onClick={()=>NavigateToHooks&&NavigateToHooks('useMemo')}>{`ParentUseMemo`}</Button>
            <Button onClick={()=>NavigateToHooks&&NavigateToHooks('useCallback')}>{`UseCallback`}</Button>
        </Box>
    )
}

export default HooksPage