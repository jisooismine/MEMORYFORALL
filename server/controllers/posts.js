// 这里我们主要是实现后端对前端请求的一个操作
import bodyParser from "body-parser";
import PostMessage from "../models/postMessage.js"

export const getPosts =async(req,res)=>{
    try {
        const postMessage =await PostMessage.find(); //这个find的过程需要时间 所以这里我们使用await等待完成之后再赋值
        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
export const creatPost =async(req,res)=>{
    const post = req.body; //获得请求的主体部分
    const newPost = new PostMessage(post)
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.starus(409).json({message:error.message});
    }
}