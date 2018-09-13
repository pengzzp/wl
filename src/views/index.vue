<template>
  <div>
    控制台
    <Mychart :id="test" class="test"/>
    <Nav/>
  </div>
</template>

<script>
import Mychart from '@/components/common/charts.vue'
import Nav from '@/components/common/nav.vue'
  export default {
    data() {
      return {
        test: 'test'
      }
    },
    components:{
      Mychart,
      Nav
    }
  }
</script>

<style scoped>
.test{
  width: 800px;
  height: 400px;
}
</style>