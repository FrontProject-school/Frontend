<template>
  <!-- 회원 탈퇴 -->
  <section class="textarea">
    <div class="first-rule">
      <textarea cols="80" rows="10">유저 정보에 관한 법률</textarea>
    </div>
    <div class="second-rule">
      <textarea cols="80" rows="8">유의 사항</textarea>
    </div>
    <div class="btn">
      <button>탈퇴하기</button>
    </div>
  </section>

  <MyPageSide></MyPageSide>
</template>


<style scoped>
/* 회원 탈퇴 */
.textarea {
  width: 1100px;
  position: relative;
  margin: 0 auto;
}

.textarea .first-rule {
  position: absolute;
  left: 35%;
  top: 40px;
  border: 1px solid #555;
}

.textarea .first-rule textarea {
  resize: none;
}

.textarea .second-rule {
  position: absolute;
  left: 35%;
  top: 305px;
  border: 1px solid #555;
}

.textarea .second-rule textarea {
  resize: none;
}

.textarea .btn {
  position: absolute;
  left: 83%;
  top: 515px;
  padding: 5px 10px;
  border: 1px solid #555;
  border-radius: 5px;
}
</style>

<script>
import MyPageSide from '../components/MyPageSide.vue';

export default {
  components: {
    MyPageSide
  },
}
</script>