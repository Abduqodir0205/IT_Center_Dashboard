<template>
  <div class="home__content">
    <SideBar/>
    <div class="right">
      <Navbar/>
    </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import Navbar from '../components/Navbar.vue'
export default {
  data(){
    return{

    }
  },
  components:{
    SideBar,
    Navbar,
  }
}
</script>

<style>
.home__content {
  display: grid;
  grid-template-areas:
    'a b b b'
    'a c c c'
    'a c c c'
    'a c c c';
}
SideBar{
  display: block;
  grid-area: a;
  margin-right: 10px;
}
Navbar{
  grid-area: b;
}
.right{
  grid-area: b;
}



</style>