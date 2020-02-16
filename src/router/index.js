import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignUp from '@/components/SignUp'
import Step1 from '@/components/SignUp/Step1'
import Step2 from '@/components/SignUp/Step2'
import Step3 from '@/components/SignUp/Step3'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/SignUp',
      name:'SignUp',
      component: SignUp,
      children:[
        {
          path:'/',
          name:'Step1',
          component:Step1
        },
        {
          path:'Step2',
          name:'Step2',
          component:Step2
        },
        {
          path:'Step3',
          name:'Step3',
          component:Step3
        }
      ]
    }
  ]
})
