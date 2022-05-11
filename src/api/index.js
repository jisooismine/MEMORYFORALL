import axios from 'axios'

const url = 'http://localhost:5000/posts';

export const fetchPosts =()=>axios.get(url); //向后端发起请求数据
export const createPost = (newPost)=>axios.post(url,newPost)