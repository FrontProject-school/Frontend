import axios from "axios";



// 로그인
async function loginPost(postData) {
    try {
      const response = await axios.post("/api/login", postData); 
      return response.data;
    } catch (error) {
      console.error("에러 발생:", error);
      throw error;
    }
  }
// 로그인
  async function loginOutPost(postData) {
    try {
      const response = await axios.post("/logout", postData); 
      return response.data;
    } catch (error) {
      console.error("에러 발생:", error);
      throw error;
    }
  }

  
export {
    loginPost,
    loginOutPost
  
  };
  