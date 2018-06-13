<template>
  <div :style="style">
    <!-- <HelloWorld/> -->
    <test-table2/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import TestTable1 from './components/table1.vue'
import TestTable2 from './components/table2.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TestTable1,
    TestTable2,
  },
  data(){
    return{
      style: {
                width: window.innerWidth + "px",
                height: window.innerHeight + "px",
                padding: "15px 15px 15px 15px", 
                background: "#f0f0f0"
            }
    }
  }
}
</script>

<style>
/* html,body{
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    overflow: hidden;
} */
</style>
