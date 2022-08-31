<script setup lang="ts">
import { ref } from 'vue'
import StudentsTable from './StudentsTable.vue'
import { useSeatsStore } from '../store/seats';
import * as XLSX from 'xlsx/xlsx.mjs';
import { timeStamp } from 'console';

defineProps<{ msg: string }>()

// // const capital = ['A','B','C','D','E','F','G','H','I','J','K','L']
let Seats = useSeatsStore();
const grid = Seats.$state.godb.table('layout')
// const arr:any[] = []

async function exportSeats(role: string){
  let data = await getArrayData()
  if(role == 'teacher'){
    console.log(rotateData(data))
  }
  const ws = XLSX.utils.aoa_to_sheet(data);
  const wb = XLSX.utils.book_new();
  let version = new Date().getMilliseconds().toString() + new Date().getSeconds().toString()
  XLSX.utils.book_append_sheet(wb, ws, "Data");
  XLSX.writeFileXLSX(wb,`座位表 ${version}.xlsx`,{bookType:'xlsx',type:'string'})
}
// 终于搞定，我好菜
function rotateData(data:any[]){
  let n = data.length
  let m = data[0].length
  let newArr = new Array(n).fill(new Array(m).fill(10))
  newArr = data.reverse()
  for(let i = 0; i<n; i++){
    newArr[i] = newArr[i].reverse()
  }

  return newArr
}



// let arr = [
//   {
//     first:'',//x: 0，输出y：0时，c的值
//     second:'',//x:1,输出y：0时，c的值
//   }
// ]

const getArrayData = async ()=>{
  let arrX:any[][] = []
  for(let i = 0; i < 12;i++){
    let Y= []
    for(let j = 0; j< 8 ;j++){
      let res = await grid.findAll((item) => {
        return item?.x == i && item?.y == j*2
      })
      Y[j] = res[0].c
    }
    arrX[i] = Y
  }
  let newArray = arrX[0].map(function (col, i) {
       return arrX.map(function (row) {
           return row[i];
       })
  });
  return newArray

}

</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="container">
    <div class="left"></div>
    <div class="desk"><span>讲台</span></div>
    <div class="right"><button @click="exportSeats('student')">导出(学生版)</button>&nbsp;<button @click="exportSeats('teacher')">导出(老师版)</button></div>
  </div>
  <div id="printMe"><StudentsTable /></div>
  
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
