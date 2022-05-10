 import mongoose from "mongoose";
//这里主要是定义最后呈现内容的一个约束格式，通过mongoose.schema进行设置 schema定义约束了数据库中的文档类型model
 const postSchema = mongoose.Schema({
     title:String,
     message:String,
     creator:String,
     tags:[String],
     likeCount:{
         type:Number,
         default:0
     },
     createdAt:{
         type:Date,
         default: new Date()
     }
 });

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;

