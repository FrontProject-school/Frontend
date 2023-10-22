// // import axios from "axios";

// // // 공지사항 게시판 요청
// // async function getNoticeBoard() {
// //   const { data } = await axios.get(
// //     "https://jsonplaceholder.typicode.com/posts"
// //   );
// //   return data;
// }

// // 문의사항 게시판 요청

// // 자유 게시판 요청

// // 게시글 검색 요청

// // 게시글 추가 요청

// // 게시글 수정 요청

// // 게시글 삭제 요청

// // 게시글 읽기 요청

// export { getNoticeBoard };


import axios from "axios";

// // 공지사항 게시판 요청
async function getNoticeBoard() {
  try {
    const response = await axios.get("URL_공지사항게시판"); 
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error; 
  }
}

// 문의사항 게시판 요청
async function getInquiryBoard() {
  try {
    const response = await axios.get("URL_문의사항게시판");
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 자유 게시판 요청
async function getFreeBoard() {
  try {
    const response = await axios.get("URL_자유게시판"); 
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 게시글 검색 요청
async function searchPosts(query) {
  try {
    const response = await axios.get(`URL_게시글검색?query=${query}`);
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 게시글 추가 요청
async function createPost(postData) {
  try {
    const response = await axios.post("URL_게시글추가", postData); 
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 게시글 수정 요청
async function updatePost(postId, postData) {
  try {
    const response = await axios.put(`URL_게시글수정/${postId}`, postData); 
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 게시글 삭제 요청
async function deletePost(postId) {
  try {
    const response = await axios.delete(`URL_게시글삭제/${postId}`); 
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 게시글 읽기 요청
async function getPost(postId) {
  try {
    const response = await axios.get(`URL_게시글/${postId}`); 
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

export {
  getNoticeBoard,
  getInquiryBoard,
  getFreeBoard,
  searchPosts,
  createPost,
  updatePost,
  deletePost,
  getPost,
};
