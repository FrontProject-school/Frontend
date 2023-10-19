import axios from "axios";

// 메인 페이지 요청

// 자기가 작성한 글 요청
async function getMyList() {
  const { data } = await axios.get("");
  return data;
}

// 닉네임 중복 & 변경 요청

// 자기가 신청한 프로그램 요청

// 회원 탈퇴 요청
