<template>
  <div class="step3">
    <h1>{{ msg }}</h1>
    <Button type="primary" long @click="gologin">去登陆</Button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'Step3',
  data () {
    return {
      msg: '第三步'
    }
  },
   methods:{
      ...mapMutations(['SET_SIGN_UP_SETP']),
      gologin(){
        // this.SET_SIGN_UP_SETP(2)
        this.$router.push({ path: '/Login'}); 
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>