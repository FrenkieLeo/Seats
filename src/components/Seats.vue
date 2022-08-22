<script setup lang="ts">
import { ref } from 'vue'
import StudentsTable from './StudentsTable.vue'

defineProps<{ msg: string }>()

const count = ref(0)





</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="container">
    <div class="left"></div>
    <div class="desk"><span>讲台</span></div>
    <div class="right"></div>
  </div>
  <StudentsTable />
</template>

<style scoped>
.container{
  display: flex;
  flex-direction: row;
  width:100%;
  
}
.left{
  width:40vw;
}
.right{
  width:40vw;
}

.save{
  margin-left:10vw;
  cursor: pointer;
  border-radius: 10px;
  width:10vw;
  height:7vh;
  background-color: azure;
}
.desk{
  flex:1;
  cursor: pointer;
  border-radius: 10px;
  width:10vw;
  height:7vh;
  background-color: azure;

}

.desk span{
  font-weight: 1000;
  line-height: 7vh;
  font-size: 1.5rem;
}

</style>
