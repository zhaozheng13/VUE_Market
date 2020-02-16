<template>
  <div class="step1">
    <h1>{{ msg }}</h1>
    <Button type="primary" long @click="gostep2">继续第二步</Button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'Step1',
  data () {
    return {
      msg: '第一步'
    }
  },
  methods:{
      ...mapMutations(['SET_SIGN_UP_SETP']),
      gostep2(){
        this.SET_SIGN_UP_SETP(1)
        this.$router.push({ path: '/SignUp/step2', query: { phone: '13916833748' } }); 
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.step1{
    width: 90% !important;
}
</style>