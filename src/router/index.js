import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posmenu from '@/components/Posmenu'
// import Pos1 from '@/components/Pos1'
// import Pos2 from '@/components/Pos2'
// import Ppos from '@/components/Ppos'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path:"/",
        name:"Posmenu",
        component:Posmenu
      }


    // {
    //   path: '/',
    //   components: {
    //     default:HelloWorld,
    //     left:Pos1,
    //     right:Pos2
    //   }
    // },
    // {
    //    path:"/poss",
    //   name:"Posmenu",
    //   component:Posmenu,
    //   children:[
    //     // {path:'/',component:Posmenu},
    //     {path:"pos1",component:Pos1},
    //     {path:"pos2",component:Pos2}
    //   ]
    // },
    
    // {
    //   path: '/pos',
    //   components: {
    //     default:Posmenu,
    //     left:Pos1,
    //     right:Pos2,
    //     low:Ppos
    //   }
    // }

  ]
})


