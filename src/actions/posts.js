import * as api from '../api';
//这里定义action 将获得我们需要的posts帖子
export const getPosts = ()=> async (dispatch)=>{
    try {
        const {data} = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

//这里我们需要向后端传送创建帖子时输入的数据
export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
      console.log(data.selectedFile);
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };