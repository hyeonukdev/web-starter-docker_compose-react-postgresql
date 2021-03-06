import {
  CREATE_POST,
  RETRIEVE_POSTS,
  UPDATE_POST,
  DELETE_POST,
  DELETE_ALL_POSTS,
} from "./types";

import PostService from "../services/PostService";

export const createPost = (title, description) => async (dispatch) => {
  try {
    const res = await PostService.create({ title, description });

    dispatch({
      type: CREATE_POST,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrievePosts = () => async (dispatch) => {
  try {
    const res = await PostService.getAll();

    dispatch({
      type: RETRIEVE_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = (id, data) => async (dispatch) => {
  try {
    const res = await PostService.update(id, data);

    dispatch({
      type: UPDATE_POST,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await PostService.remove(id);

    dispatch({
      type: DELETE_POST,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllPosts = () => async (dispatch) => {
  try {
    const res = await PostService.removeAll();

    dispatch({
      type: DELETE_ALL_POSTS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findPostsByTitle = (title) => async (dispatch) => {
  try {
    const res = await PostService.findByTitle(title);

    dispatch({
      type: RETRIEVE_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
