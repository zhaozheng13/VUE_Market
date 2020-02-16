<template>
  <div class="step2">
    <h1>{{ msg }}</h1>
    <Button type="primary" long @click="gostep3">继续第三步</Button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'Step2',
  data () {
    return {
      msg: '第二步'
    }
  },
   methods:{
      ...mapMutations(['SET_SIGN_UP_SETP']),
      gostep3(){
        this.SET_SIGN_UP_SETP(2)
        this.$router.push({ path: '/SignUp/step3', query: { name: 'alanzhao' } }); 
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>