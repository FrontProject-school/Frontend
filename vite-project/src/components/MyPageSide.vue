<template>

  <!-- SIDE MENU -->
  <section class="side-menu">
    <h1>마이 페이지</h1>
    <ul class="menu">
      <li>
        <router-link to="/memberInfo">회원 정보</router-link>
      </li>
      <li>
        <router-link to="writtenList">쓴 글 목록</router-link>
      </li>
      <li>
        <router-link to="applyingNow">신청 현황</router-link>
      </li>
    </ul>
  </section>

</template>

<style>
/* SIDE MENU */
.side-menu {
  width: 300px;
  height: 500px;
  left: 30px;
  top: 150px;
  position: absolute;
  border-right: 1px solid black;
}
.side-menu h1 {
  text-align: center;
  font-size: 32px;
}
.side-menu .menu {
  margin-top: 40px;
}
.side-menu .menu li {
  display: flex;
  justify-content: left;
  padding: 10px 0;
  font-size: 20px;
}
.side-menu .menu li .selected {
  font-weight: 800;
}
.side-menu .menu a {
  color: #555;
  text-decoration: none;
}
.side-menu .menu a:hover {
  font-size: 25px;
}
</style>