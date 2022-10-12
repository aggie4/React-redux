let initialState = {
    count: 0,
};
// 초기값

function reducer(state = initialState, action) {
    console.log('액션은?', action);
    if (action.type === 'INCREMENT') {
        return { ...state, count: state.count + 1 };
        /// ... state = 예를 들어서 state 값이 여러개라면 나머지는 그대로 유지하되, 카운터 값만 state에 있는 카운터 + 1 로 바꾼다.
        /// 리듀사에 쓰는 리턴 값은 ... 3개를 붙힌다는 걸 공식으로 외우면 좋다
    }
    if (action.type === 'DECREMENT') {
        return { ...state, count: state.count - 1 };
        /// 감소버튼 만들기
    }
    if (action.type === 'CERASE') {
        return { ...state, count: (state.count = 0) };
    }
    return { ...state };
}
/// 리듀서에서는 무조건 리턴값이 필요하기 때문에, if만에 있는 케이스가 아니더라고 스테이스 값을 받을 수 있게 기본적인 리턴값을 써줘야 된다
/// 리듀서가 행동지침을 들고 있다.
/// 행동지침이란 IF문 뒤에다가 작성하는 것이 행동지침이라고 한다 , 스위치, 삼항연산자
// 리듀서가 스토어를 바꾸는 역할을 하는데, 행동 규칙을 만든다는 거
// 리턴값으로 바꿔주는 것, 새로운 걸 바꿔주는 것

/// switch 문으로 행동지침 작성한다면

/*     switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        default:
            return { ...state };
    }
} */
// 두개의 매개변수를 준다,
// state 는 초기화를 시킨다,
// 액션을 가져다가 어떤 행동의 지침을 따라서 어떠한 행동을 할 지 판단한다 그래서 액션이 필요하다

// App.js 에서 액션을 만들었는데 그걸 가지고 리듀서로 온다
// 자동으로 디스패치가 만들어 온 액션을 가지고 온다

export default reducer;
// 수출을 하게 되면 가지고 가서 쓸 수 있다
