import axios from "axios";

// 로그인
export async function loginPost(username, password) {
  console.log(username);
  const formData = new FormData();
  formData.append("email", username);
  formData.append("password", password);
  try {
    const response = await axios.post("/api/login", formData);
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
