<template>
  <div>
      <h2>id是：{{id}}</h2>
      <h3>标题是：{{title}}</h3>
  </div>
</template>

<script>
export default {
    name:'Detail',
    props:['id','title']
}
</script>

<style>

</style>
