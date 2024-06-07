import React from 'react';
import {Routes, Route} from 'react-router-dom';
import UseState from '../hooks/useState/UseState'
import UseEffect from "../hooks/useEffect/UseEffect";
import UseEffectDeps from "../hooks/useEffect/UseEffectDeps";
import UseRef from "../hooks/useRef/UseRef";
import UseRef2 from "../hooks/useRef/UseRef2";
import UseRef3 from "../hooks/useRef/UseRef3";
import ParentUseMemo from "../hooks/useMemo/ParentUseMemo";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<UseState/>}/>
            <Route path="/useEffect" element={<UseEffect/>}/>
            <Route path="/useEffectDeps" element={<UseEffectDeps/>}/>
            <Route path="/useRef" element={<UseRef/>}/>
            <Route path="/useRef2" element={<UseRef2/>}/>
            <Route path="/useRef3" element={<UseRef3/>}/>
            <Route path="/useMemo" element={<ParentUseMemo/>}/>
        </Routes>
    );
}