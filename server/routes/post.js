import express from "express";
//这里是对express框架路由的一个搭建
import {getPosts,creatPost} from '../controllers/posts.js'
const router = express.Router();

//localhost:5000/posts
router.get('/',getPosts);
router.post('/',creatPost)

export default router;
