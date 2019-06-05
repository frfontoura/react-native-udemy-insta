import { ADD_POST } from "../actions/actionTypes";

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
    default:
      return state;
  }
};

export default reducer;
