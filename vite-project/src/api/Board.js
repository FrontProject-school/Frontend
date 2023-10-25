import axios from "axios";

// 공지사항 게시판 요청
async function getNoticeBoard() {
  const { data } = await axios.get("http://localhost:8000/api/notices");
  return data;
}

// 문의사항 게시판 요청

// 자유 게시판 요청

// 게시글 검색 요청

// 게시글 추가 요청

// 게시글 수정 요청

// 게시글 삭제 요청

// 게시글 읽기 요청

export { getNoticeBoard };
