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
import ReactMemo from "../components/memo/ReactMemo";
import ComponentsPage from "../page/ComponentsPage";
import ParentContext from "../hooks/useContext/ParentContext";
import CustomAxiosPage from "../page/CustomAxiosPage";
import RestApiPage from "../page/RestApiPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            {/*hook라우터*/}
            <Route path="/hooks" element={<HooksPage/>}/>
            <Route path="/hooks/useState" element={<UseState/>}/>
            <Route path="/hooks/useEffect" element={<UseEffect/>}/>
            <Route path="/hooks/useEffectDeps" element={<UseEffectDeps/>}/>
            <Route path="/hooks/useRef" element={<UseRef/>}/>
            <Route path="/hooks/useRef2" element={<UseRef2/>}/>
            <Route path="/hooks/useRef3" element={<UseRef3/>}/>
            <Route path="/hooks/useMemo" element={<ParentUseMemo/>}/>
            <Route path="/hooks/useCallback" element={<UseCallback/>}/>
            <Route path="/hooks/useContext" element={<ParentContext/>}/>
            {/*리액트 컴포넌트*/}
            <Route path="/components" element={<ComponentsPage/>}/>
            <Route path="/components/reactMemo" element={<ReactMemo/>}/>
            {/*api 컴포넌트 */}
            <Route path="/api" element={<RestApiPage/>}/>
            <Route path="/customApi" element={<CustomAxiosPage/>}/>
        </Routes>
    );
}