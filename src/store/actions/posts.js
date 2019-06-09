import { ADD_COMMENT, SET_POSTS } from "./actionTypes";
import axios from "axios";

export const addPost = post => {
  return dispatch => {
    axios({
      url: "uploadImage",
      baseURL: "https://us-central1-udemy-rn-6feea.cloudfunctions.net",
      method: "post",
      data: {
        image: post.image.base64
      }
    })
      .catch(err => console.log(err))
      .then(res => {
        post.image = res.data.imageUrl;
        axios
          .post("/posts.json", { ...post })
          .catch(err => console.log(err))
          .then(res => {
            console.log(res);
          });
      });
  };
};

export const addComment = payload => {
  return {
    type: ADD_COMMENT,
    payload
  };
};

export const setPosts = posts => {
  return {
    type: SET_POSTS,
    payload: posts
  };
};

export const fetchPosts = () => {
  return dispatch => {
    axios
      .get("/posts.json")
      .catch(err => console.log(err))
      .then(res => {
        const rawPosts = res.data;
        const posts = [];
        for (let key in rawPosts) {
          posts.push({
            ...rawPosts[key],
            id: key
          });
        }

        dispatch(setPosts(posts));
      });
  };
};
