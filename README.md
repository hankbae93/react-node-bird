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

- action을 실행하기전에 인터셉트해서 미들웨어의 코드를 실행한다.

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

- redux-thunk

  ```js
  // 한 함수에서 여러번 dispath를 하게 도와준다. 더이상의 기능은 없다고한다
  // thunk 식 request, success, failure action 함수
  export const loginAction = (data) => {
    return (dispatch, getState) => {
      const state = getState();
      dispatch(loginRequestAction());
      axios
        .post("/api/login")
        .then((res) => {
          dispatch(loginSuccessAction(res.data));
        })
        .catch((err) => {
          dispatch(logoutFailureAction(err));
        });
    };
  };
  ```

- redux-saga

        실수로 로그인 클릭을 두번했을때 thunk는 두번 다 요청이 된다.(이런 걸 방지하는 부분을 직접 구현해야됨)
        saga의 경우 "takelatest"는 두번이 동시에 들어왔을 때 가장 마지막 요청만 받는다
        인피니티 스크롤 같은 경우 스크롤할때마다 수백번 fetch를 하면 dos공격이 될 수 있다. 이런 부분을 saga에서
        지원해주는 부분이 있다. "throttle"의 경우 1초에 3번 action을 방지한다는 식으로 세팅이 가능하다.

  ```js
      import {
          all, fork, call, put, take, takeEvery, takeLatest, delay, throttle
      } from 'redux-saga/effects';
      all : 배열을 받으면 동시에 모두 실행

      ======
      fork: 함수 실행 => 비동기 함수 호출 , 바로 실행
      axios.post('api/login')
      yield put({
          type: 'LOG_IN_SUCCESS',
          data: result.data
      })
      ======
      call: 함수실행이지만 다르다 => 동기 함수 호출 , response가 오고 다음함수 실행
      axios.post('api/login')
          .then((res) => {
              yield put({
                  type: 'LOG_IN_SUCCESS',
                  data: result.data
              })
          })
      ======
      take: 액션 실행되서 결과 오기 전까지 기다림 ??
      put: 리덕스의 dispatch

      while(true) {
          yield take('LOG_IN_REQUEST', logIn); 이러지 않으면 1회용만 사용가능하다
      }

      takeEvery가 while(true)와 같은효과를 내준다
      그러나 동시에 두번 클릭햇을시 두번 요청을하게되므로 마지막요청만 허용하는 takeLatest 사용
      takeLatest는 응답을 두번 받지 않을뿐 실제 서버에는 요청이 두개가 저장되므로 서버에서도 따로 방지를 해줘야한다.

      yield throttle ('ADD_POST_REQUEST', addPost, 10000); 시간동안 같은요청은 실행도 되지않는다

  ```

# generator ??

1.

```js
const gen = function* () {
  console.log(1);
  yield; // 함수를 실행할 때 위에서 아래로 다 실행하는 것이 아니라 yield에서 중단이 가능하다
  console.log(2);
  yield;
  console.log(3);
  yield 4; // 이런식으로 return 값도 줄 수 잇다
};

const generator = gen();
generator.next(); // 1, {value: undefined, done: false}
generator.next(); // 2, {value: undefined, done: false}
generator.next(); // 3, {value: 4, done: false}
generator.next(); // undefined {value: undefined, done: true}
```

2.

```js
let i = 0;
const gen = function* () {
    while(true) { // 금기시된 코드같지만 제네레이터의 경우 yield에서 바로 중단된다
        yield i++;
    }
}
const generator = gen();
generato.next() // 1
generato.next() // 2
generato.next() // 3

무한의 개념과 이벤트가 발생해야 실행되는 이벤트리스너 개념을 표현할 수 있어서 이런 특성을 활용해
redux-saga를 만들었다고 한다
```

# Eslint

    협업하는 프로젝트에서 코드 스타일을 맞추는 데 큰 의의를 둔다.

# 다른 리듀서의 데이터가 필요할 때

```js
const dummyUser = (data) => ({
  ...data,
  nickname: "제로초",
  id: 1,
  Posts: [{ id: 1 }], // post 리듀서의 데이터가 필요할 때 어떻게 해야될까
  Followings: [
    { nickname: "란자" },
    { nickname: "만자" },
    { nickname: "자자" },
  ],
  Followers: [{ nickname: "란자" }, { nickname: "만자" }, { nickname: "자자" }],
});
```

    상태는 action을 통해서만 바꿀 수 있기 때문에 action을 먼저 만들자

```js
function* addPost(action) {
  try {
    yield delay(1000);
    // const result = yield call(addPostAPI, action.data);
    const id = shortid.generate();
    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id,
        content: action.data,
      },
    });
    yield put({
      type: ADD_POST_TO_ME, // user 리듀서에 있는 액션을 import 해서 실행
      data: id,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.reponse.data,
    });
  }
}
```

# immer

상태의 불변성을 지키기 위해서 이렇게 긴 코드를 치다보면 이 작업을 줄여줄 라이브러리가 필요해지기 마련입니다.

리액트에서는 불변성을 지켜주는 use-immer 라이브러리가 있음.

```js
case ADD_COMMENT_SUCCESS: {
           const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
           const post = {...state.mainPosts[postIndex]};
           post.Comments = [dummyComment(action.data.content), ...post.Comments];
           const mainPosts = [...state.mainPosts];
           mainPosts[postIndex] = post;

            return {
                ...state,
                addCommentLoading: false,
                addCommentDone: true,
                mainPosts
            }
        }
```

이제 immer를 사용한 케이스입니다.

```js
import produce from 'immer';

const reducer = (state = initialState, action) => {
    return produce((state, draft => { // 이제 state가 아닌 draft로 직접 변경한다.
      case ADD_COMMENT_SUCCESS:
        const post = draft.mainPosts.find((v) => v.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
    })
}
```

# http method

```js
app.get => 가져오기
app.post => 생성
app.put => 전체 수정
app.delete => 제거
app.patch => 부분 수정
app.options => 찔러보기? (요청)
app.head => 헤더만 가져오기(헤더 / 바디)
```
