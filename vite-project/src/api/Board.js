import axios from "axios";

async function getNoticeBoard() {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
}

export { getNoticeBoard };