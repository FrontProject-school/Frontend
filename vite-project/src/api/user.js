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

// 메인 페이지 요청
async function getMainPage() {
  try {
    const response = await axios.get("URL_메인페이지"); 
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error; 
  }
}

// 자기가 작성한 글 요청
async function getMyList() {
  try {
    const response = await axios.get("URL_자기가작성한글"); 
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 닉네임 중복 & 변경 요청
async function checkAndChangeNickname(nickname) {
  try {
    const response = await axios.put(`URL_닉네임/${nickname}`);
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 자기가 신청한 프로그램 요청
async function getMyPrograms() {
  try {
    const response = await axios.get("URL_자기가신청한프로그램"); 
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 회원 탈퇴 요청
async function deleteUserAccount() {
  try {
    const response = await axios.delete("URL_회원탈퇴"); 
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

export {
  getMainPage,
  getMyList,
  checkAndChangeNickname,
  getMyPrograms,
  deleteUserAccount,
};
