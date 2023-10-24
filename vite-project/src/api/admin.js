// import axios from "axios";

// // 관리자 정보( 복수 )
// async function getAdminData() {
//   const { data } = await axios.get("");
//   return data;
// }

// // 전체 관리자 임명


// // 관리자 추가

// // 관리자 삭제

// // 약관 읽기 요청



import axios from "axios";
import api from ".";



const apiUrl = ""; 


// 관리자 정보 (복수)
async function getAdminData() {
  try {
    const response = await axios.get(`/api/admin`);
    return response.data;
  } catch (error) {
    console.error("관리자 정보를 가져오는 중 오류 발생:", error);
    throw error;
  }
}

// 전체 관리자 임명  POST 요청
async function appointAdmin(adminData) {
  try {
    const response = await axios.put(`/api/admin/{id}`, adminData);
    return response.data;
  } catch (error) {
    console.error("전체 관리자 임명 중 오류 발생:", error);
    throw error;
  }
}

// 관리자 추가  POST 요청
async function addAdmin(adminData) {
  try {
    const response = await axios.post(`/api/admin`, adminData);
    return response.data;
  } catch (error) {
    console.error("관리자 추가 중 오류 발생:", error);
    throw error;
  }
}

// 관리자 삭제  DELETE 요청
async function deleteAdmin(adminId) {
  try {
    const response = await axios.delete(`/api/admin/{id}`);
    return response.data;
  } catch (error) {
    console.error("관리자 삭제 중 오류 발생:", error);
    throw error;
  }
}

// 약관 읽기 요청  GET 요청
async function getTerms() {
  try {
    const response = await axios.get(``);
    return response.data;
  } catch (error) {
    console.error("약관 읽기 요청 중 오류 발생:", error);
    throw error;
  }
}




async function fetchData() {
  try {
    const adminData = await getAdminData();
    console.log("관리자 정보:", adminData);



    const terms = await getTerms();
    console.log("약관 내용:", terms);

 
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
  }
}


fetchData();

