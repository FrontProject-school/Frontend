<script>
export default{

}
</script>

<template>
  <header>
    
    <h1><RouterLink to="/"><img src="#" alt="logo"> 제목</RouterLink> </h1>
    <div class="main_bar">
      <ul>
        <li><RouterLink to="/intro_page">소개</RouterLink> </li>
        <li><RouterLink to="/notice_page">공지사항</RouterLink> </li>
        <li><RouterLink to="/bulletin_page">자유게시판</RouterLink></li>
        <li>신청</li>
        <li><RouterLink to="/inquiry_page">문의</RouterLink></li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
  header {
    position: relative;

  }
  h1 {
    /* position: absolute; */
    padding: 30px 0;
    text-align: left;
    font-size: 35px;
  }

  .main_bar{
    position: relative;
  }

  ul {
    position: absolute;
    width: 100%;
    background-color: #afafaf;
    /* padding: 10px 0; */
  }
  ul li {
    float: left;
    width: 20%;
    margin: 15px 0;
  }

</style>