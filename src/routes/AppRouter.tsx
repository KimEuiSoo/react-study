import React from 'react';
import {Routes, Route} from 'react-router-dom';
import UseState from '../hooks/useState/UseState'
import UseEffect from "../hooks/useEffect/UseEffect";
import UseEffectDeps from "../hooks/useEffect/UseEffectDeps";
import UseRef from "../hooks/useRef/UseRef";
import UseRef2 from "../hooks/useRef/UseRef2";
import UseRef3 from "../hooks/useRef/UseRef3";
import ParentUseMemo from "../hooks/useMemo/ParentUseMemo";
import UseCallback from "../hooks/useCallback/UseCallback";
import HooksPage from "../page/HooksPage";
import MainPage from "../page/MainPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/hooks" element={<HooksPage/>}/>
            <Route path="/hooks/useState" element={<UseState/>}/>
            <Route path="/hooks/useEffect" element={<UseEffect/>}/>
            <Route path="/hooks/useEffectDeps" element={<UseEffectDeps/>}/>
            <Route path="/hooks/useRef" element={<UseRef/>}/>
            <Route path="/hooks/useRef2" element={<UseRef2/>}/>
            <Route path="/hooks/useRef3" element={<UseRef3/>}/>
            <Route path="/hooks/useMemo" element={<ParentUseMemo/>}/>
            <Route path="/hooks/useCallback" element={<UseCallback/>}/>
        </Routes>
    );
}