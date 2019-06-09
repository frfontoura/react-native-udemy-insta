import { ADD_POST, ADD_COMMENT } from "./actionTypes";
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

  // return {
  //   type: ADD_POST,
  //   payload: post
  // };
};

export const addComment = payload => {
  return {
    type: ADD_COMMENT,
    payload
  };
};
