import { ADD_POST, ADD_COMMENT } from "../actions/actionTypes";

const initialState = {
  posts: [
    {
      id: Math.random(),
      nickname: "User Test 1",
      email: "teste@gmail.com",
      image: require("../../../assets/imgs/fence.jpg"),
      comments: [
        {
          nickname: "User Test 2",
          comment: "bla bla bla"
        },
        {
          nickname: "User Test 3",
          comment: "qwerty"
        }
      ]
    },
    {
      id: Math.random(),
      nickname: "User Test 4 Redux",
      email: "teste4@gmail.com",
      image: require("../../../assets/imgs/bw.jpg"),
      comments: []
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          ...action.payload
        })
      };
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.postId) {
            if (post.comments) {
              post.comments = post.comments.concat(action.payload.comment);
            } else {
              post.comments = [action.payload.comment];
            }
          }
          return post;
        })
      };
    default:
      return state;
  }
};

export default reducer;
