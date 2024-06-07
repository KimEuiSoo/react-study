import React, {useRef, useState} from "react";

const UseRef2 = () => {
    const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
    const [now, setNow] = useState<number>(0);
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    const handleStartClick = () => {
        if (!isRunning) {
            const startTime = Date.now() - elapsedTime;
            intervalRef.current = setInterval(() => {
                setNow(Date.now());
                setElapsedTime(Date.now() - startTime);
            }, 10);

            setIsRunning(true);
        }
    }

    const handleStopClick = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
    }

    const handleResetClick = () => {
        clearInterval(intervalRef.current);
        setNow(0);
        setElapsedTime(0);
        setIsRunning(false);
    }

    return (
        <>
            <h1>Time passed: {(elapsedTime / 1000).toFixed(3)}</h1>
            <button onClick={handleStartClick}>
                Start
            </button>
            <button onClick={handleStopClick}>
                Stop
            </button>
            <button onClick={handleResetClick}>
                Reset
            </button>
        </>
    )
}

export default UseRef2