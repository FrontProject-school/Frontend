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
import api from "./index";

// 공지사항 게시판 요청
export async function getNoticeBoard() {
  try {
    const response = await axios("/api/notices");
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 게시글 읽기 요청
export async function getNoticeRead(postId) {
  try {
    const response = await axios.get(`/api/notices/${postId}`);
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 문의사항 게시판 요청 아직 api주소가 없어서 요청을 못합니다
export async function getInquiryBoard() {
  try {
    const response = await axios.get("/api/questions");
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 자유 게시판 요청
export async function getFreeBoard() {
  try {
    const response = await axios.get("/api/freeboards");
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 게시글 검색 요청
async function searchPosts(query) {
  try {
    const response = await axios.post(
      `/api/search/{게시판 타입}query=${query}`
    );
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 게시글 추가 요청
async function createPost(postData) {
  try {
    const response = await axios.post("/program", postData);
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 게시글 수정 요청
async function updatePost(postId, postData) {
  try {
    const response = await axios.put(
      `/api/freeboards/{num}/${postId}`,
      postData
    );
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 게시글 삭제 요청
async function deletePost(postId) {
  try {
    const response = await axios.delete(`/api/freeboards/{num}/${postId}`);
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 게시글 읽기 요청
async function getPost(postId) {
  try {
    const response = await axios.get(`/api/freeboards/{num}/${postId}`);
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}
