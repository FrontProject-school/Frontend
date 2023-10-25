// import axios from "axios";

// USER

// 신청 현황 요청

// 유저 신청 요청

// 신청 취소 요청

// ADMIN

// 유저 신청 현황 요청



import axios from "axios";

// 신청 현황 요청 
async function getUserApplicationStatus() {
  try {
    const response = await axios.get("/api/applicant"); 
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error; 
  }
}

// 유저 신청 요청 
async function createUserApplication(applicationData) {
  try {
    const response = await axios.post("/api/applicant", applicationData);
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 신청 취소 요청 
async function cancelUserApplication(applicationId) {
  try {
    const response = await axios.delete(`/api/applicant/{id}/${applicationId}`); 
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

// 유저 신청 현황 요청 
async function getAdminUserApplicationStatus() {
  try {
    const response = await axios.get("/api/applicant"); 
    return response.data;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
}

getUserApplicationStatus()
  .then(response => {
    console.log("유저 신청 현황:", response.data);
  })
  .catch(error => {
    console.error("에러 발생:", error);
  });


