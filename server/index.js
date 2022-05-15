
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRoutes from "./routes/users.js";

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true })) //解析http请求体 解析json格式 使用复杂算法进行深度解析
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))//解析表单提交的数据 使用复杂算法进行深度解析
app.use(cors());

app.use('/posts', postRoutes);  //创建多个路由匹配规则
app.use("/user", userRoutes);

const CONNECTION_URL = "mongodb+srv://javascriptlearing:zt4246063@cluster0.heor9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
