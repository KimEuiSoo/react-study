import React, {useState} from "react";
import UseMemo from "./UseMemo";

const ParentUseMemo = () => {
    const [type, setType] = useState<'all' | 'active' | 'completed'>("all");

    const handleChangeType = (change: 'all' | 'active' | 'completed') => {
        setType(change);
    }

    return (
        <div>
            <button onClick={() => handleChangeType && handleChangeType('all')}>All</button>
            <button onClick={() => handleChangeType && handleChangeType('active')}>Active</button>
            <button onClick={() => handleChangeType && handleChangeType('completed')}>Completed</button>
            <UseMemo type={type}/>
        </div>
    );
}

export default ParentUseMemo