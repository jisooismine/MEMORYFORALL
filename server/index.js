//导入依赖项 新版本的node允许使用import来引入依赖项
import express from 'express';
import bodyParser from 'body-parser'; 
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/post.js'

const app = express();
app.use('/posts',postRoutes);
//后续创建环境变量 然后存储连接URL地址
const CONNECTION_URL = "mongodb+srv://javascriptlearing:zt4246063@cluster0.heor9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT|| 5000; //在许多环境中作为约定 可以设置环境变量PORT以告知Web服务器要监听的端口 
                                      //这里的意思是环境变量PORT中的任何内容，如果没有，则为5000 
                                      //因此，可以将app.listen，或传递给app.set('port', ...)，从而使服务器能够从环境中接受要监听的端口上的参数
mongoose.connect(CONNECTION_URL)
    .then(()=>app.listen(PORT,()=>console.log(`server is running on port:${PORT}`)))
    .catch((error)=>console.log(error.message));

