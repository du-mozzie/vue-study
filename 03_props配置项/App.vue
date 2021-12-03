<template>
  <div>
      <div ref="div">hello</div>
      <button @click="showDiv">点我显示上面的元素</button>
      <School></School>
  </div>
</template>

<script>
import School from './components/school.vue'

export default {
    components:{
        School
    },
    methods:{
        showDiv(){
            console.log(this.$refs.div);
        }
    }
}
</script>

<style>

</style>
