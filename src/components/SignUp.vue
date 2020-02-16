<template>
  <div>
    <Row class="container">
      <i-col span="12" offset="2" class="signup-img-box">
        <img src="../../static/img/gouwuche.jpg" alt="">
      </i-col>
      <i-col span="8" class="box">
        <div class="sign-up-title">
          <h1>欢迎注册账号</h1>
          <br>
          <h2>ALAN MALL, 我消费 我开心</h2>
        </div>
        <div class="sing-up-step-box">
          <Steps :current="signUpStep" size="small">
              <Step title="验证手机号"></Step>
              <Step title="填写账号信息"></Step>
              <Step title="注册成功"></Step>
          </Steps>
          <div class="sign-up-box">
            <transition mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'SignUp',
  data () {
    return {
      index: 0
    };
  },
  computed: {
    ...mapState(['signUpStep'])
  },
  methods: {
    ...mapMutations(['SET_SIGN_UP_SETP'])
  },
  store,
  mounted () {
    this.SET_SIGN_UP_SETP(0);
  }
};
</script>

<style scoped>
.container {
  margin: 15px auto;
  height: 500px;
  overflow: hidden;
  /* border:1px solid red; */
}
.signup-img-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.signup-img-box img {
  height: 90%;
}
.sign-up-title {
  width: 430px;
  margin: 15px auto;
  height: 80px;
}
.sing-up-step-box {
  margin: 15px auto;
  /* padding-left: 30px; */
  padding-top: 30px;
  width: 430px;
  height: 380px;
  border: 1px solid #495060;
}
.sign-up-box {
  margin: 30px 25px;
  width: 350px;
  display: flex;
  align-items: center;
  border:1px solid red
}
</style>