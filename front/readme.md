# 중앙정보 관리하는 라이브러리들
redux, context API , mobx , 그래프큐엘의 아폴로

1. redux 
- 에러가 나도 디버깅이 편하다
- 코드량이 많아지는 반면 안정적이다

2. mobx 
- 트래킹이 불편하다
- 코드량이 많이 줄어든다

3. Context API
- 비동기를 지원해주지 않는다.
- 직접 비동기 액션을 구현하다보면 리덕스와 똑같다.


# Redux
## 1.
```js
switch(action.type) {
    case 'CHANGE_NAME': 
        return {
            ...state, // 굳이 새로 키와 값을 쓰지않는 이유는 기존 것을 참조해서 메모리를 아끼기 위해서다.
            name: action.payload.data
        } 
}

const prev = { name: 'Ranja' };
const next = prev;
next.name = '란자';

prev.name = "란자"; ??? 

리듀서에서 새로운 객체를 리턴하는 이유는 리덕스가 변경 내역을 저장하기 위해서다.
전 객체와 무엇이 달라졌는지 다른 객체로 던져줘야 추적가능하다.
```

## 2.
```js
    useCallback : 주로 props로 넘겨주는 함수 Caching
    리렌더링 : 리턴 부분을 다시그리는게 아니라 state, 인라인스타일의 객체 , 
    바뀐 컴포넌트만 다시 그린다

    <div style={{ marginTop: 10 }}>
    인라인 스타일로 객체를 주면  {} === {} 는 false 이기때문에 리액트가 리렌더링한다. 
    크게 집착할 필요는 없다고함

    const style = useMemo(() => ({ marginTop: 10 }), []) 식으로 넘겨주는 방법이나 
    styled component 추천
```

## 3. Middleware
    action을 실행하기전에 인터셉트해서 미들웨어의 코드를 실행한다.
```js
action을 실행하기전에 로그를 남겨준다
const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    console.log(action); // action을 실행하기전에 한번 실행해주는 미들웨어
    // if (typeof action === 'function') { // thunk에서는 action을 함수로 둘 수 있다
    //     return action(dispatch, getState, extraArgument);
    // }

    return next(action);
}
```