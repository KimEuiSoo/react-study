import React, {useReducer} from "react";

type State = {
    name: string;
    phone: string;
    isFree: boolean;
    fee: number;
}

type Action =
    { type: 'setName', name: string }
    | { type: 'setPhone', phone: string }
    | { type: 'setFree' }
    | { type: 'setFee', fee: number }

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'setName':
            return {
                ...state,
                name: state.name
            };
        case 'setPhone':
            return {
                ...state,
                phone: state.phone
            };
        case 'setFree':
            return {
                ...state,
                isFree: !state.isFree
            };
        case 'setFee':
            return {
                ...state,
                fee: state.fee
            };
        default :
            return state
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '홍길동',
        phone: '갤럭시 S24',
        isFree: false,
        fee: 1300000
    });

    const userName: string[] = ['홍길동','임꺽정','이순신','신사임당','세종대왕']
    const phoneName: string[] = ['갤럭시 S24','iPhone 11 mini', 'iPhone 15', '갤럭시 S8']
    const fee: number[] = [1300000, 500000, 1400000, 300000]


    const formatText = (isFree: boolean, fee: number) => {
        let format = "";

        if (!isFree)
            format = `핸드폰의 가격은 ${fee.toLocaleString('ko-KR')}원 입니다.`;
        else
            format = `이 핸드폰은 무료입니다.`;

        return format;
    }

    const getRandomElement = (arr: string[]|number[]) => {
        const random = Math.floor(Math.random() * arr.length);
        return arr[random];
    }

    return (
        <>
            <h3>{`이름 : ${state.name}`} {`핸드폰 : ${state.phone}`}</h3>
            <p>{formatText(state.isFree, state.fee)}</p>
            <button
                onClick={() => {
                    dispatch({type: 'setName', name: state.name=getRandomElement(userName).toString()})
                }}
            >
                사용자 이름 변경
            </button>
            <button
                onClick={() => {
                    dispatch({type: 'setPhone', phone: state.phone=getRandomElement(phoneName).toString()});
                }}
            >
                핸드폰 기종 변경
            </button>
            <button
                onClick={() => {
                    dispatch({type: 'setFree'});
                }}
            >
                {state.isFree ? '유로로 바꾸기' : '무료로 바꾸기'}
            </button>
            <button
                onClick={() => {
                    dispatch({type: 'setFee', fee: state.fee=parseInt(getRandomElement(fee).toString())});
                }}
            >
                가격변경
            </button>
        </>
    );
}

export default UseReducer