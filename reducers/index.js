import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

// (이전상태, 약션) => 다음상태
const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                return { ...state, ...action.payload };

            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;

// HYDRATE (리덕스 서버사이드 렌더링)
// HYDRATE를 위해 index reducer 추가해줘야한다.
