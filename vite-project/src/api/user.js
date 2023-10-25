// import axios from "axios";

// // 메인 페이지 요청

// // 자기가 작성한 글 요청
// async function getMyList() {
//   const { data } = await axios.get("");
//   return data;
// }

// // 닉네임 중복 & 변경 요청

// // 자기가 신청한 프로그램 요청

// // 회원 탈퇴 요청

import axios from "axios";
import api from ".";
// import api from ".";

// 로그인 요청

// 특정 유저 정보
export async function getUserData() {
  try {
    const response = await api.get("/api/user/info");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 메인 페이지 요청
async function getMainPage() {
  try {
    const response = await axios.get("/api/user/list");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 닉네임 중복 & 변경 요청
async function checkAndChangeNickname(nickname) {
  try {
    const response = await axios.put(`/api/user/update/{id}${nickname}`);
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 자기가 신청한 프로그램 요청
async function getMyPrograms() {
  try {
    const response = await axios.get("/api/applicant");
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 회원 탈퇴 요청
async function deleteUserAccount() {
  try {
    const response = await axios.delete("/api/user/delete/{id}");
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}
