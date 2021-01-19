export const initialState = {
    mainPosts: [
        {
            id: 1,
            User: {
                id: 1,
                nickname: "윤",
            },
            content: "첫 번째 게시글 # 해시태그 #익스프레스",
            Images: [
                {
                    src:
                        "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_700,q_80,w_490/v1540036404/zwkzpuxypnsrr5d5ebcv.jpg",
                },
                {
                    src:
                        "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_700,q_80,w_490/v1540036404/zwkzpuxypnsrr5d5ebcv.jpg",
                },
                {
                    src:
                        "https://an2-img.amz.wtchn.net/image/v1/watcha/image/upload/c_fill,h_700,q_80,w_490/v1540036404/zwkzpuxypnsrr5d5ebcv.jpg",
                },
            ],
            Components: [
                {
                    User: {
                        nickname: "hero",
                    },
                    content: "좋습니다",
                },
            ],
        },
    ],
    imagePaths: [],
    postAdded: false,
};

const ADD_POST = "ADD_POST";

export const addPost = {
    type: ADD_POST,
};

const dummyPost = {
    id: 2,
    content: "더미데이터",
    User: {
        id: 1,
        nickname: "yoon",
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        default:
            return state;
    }
};

export default reducer;
