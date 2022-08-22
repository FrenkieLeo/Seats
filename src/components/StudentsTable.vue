<script setup lang="ts">
import { getInnerRange } from '@vue/compiler-core';
import { computed } from '@vue/reactivity';
import { HtmlAttributes } from 'csstype';
import {ref,reactive, onMounted, onUpdated} from 'vue';
import { useSeatsStore } from '../store/seats';
let index= ref(1);
// import { liveQuery } from "dexie";
// import { db } from "../indexdb";
// import { useObservable } from "@vueuse/rxjs";

let data =[
  { x: 0, y: 0, w: 1, h: 2, i: "0", c: "name" },
  { x: 1, y: 0, w: 1, h: 2, i: "1", c: "name" },
  { x: 2, y: 0, w: 1, h: 2, i: "2", c: "name" },
  { x: 3, y: 0, w: 1, h: 2, i: "3", c: "name" },
  { x: 4, y: 0, w: 1, h: 2, i: "4", c: "name" },
  { x: 5, y: 0, w: 1, h: 2, i: "5", c: "name" },
  { x: 6, y: 0, w: 1, h: 2, i: "6", c: "name" },
  { x: 7, y: 0, w: 1, h: 2, i: "7", c: "name" },
  { x: 8, y: 0, w: 1, h: 2, i: "8", c: "name" },
  { x: 9, y: 0, w: 1, h: 2, i: "9", c: "name" },
  { x: 10, y: 0, w: 1, h: 2, i: "10", c: "name" },
  { x: 11, y: 0, w: 1, h: 2, i: "11", c: "name" },
  { x: 0, y: 1, w: 1, h: 2, i: "12", c: "name" },
  { x: 1, y: 1, w: 1, h: 2, i: "13", c: "name" },
  { x: 2, y: 1, w: 1, h: 2, i: "14", c: "name" },
  { x: 3, y: 1, w: 1, h: 2, i: "15", c: "name" },
  { x: 4, y: 1, w: 1, h: 2, i: "16", c: "name" },
  { x: 5, y: 1, w: 1, h: 2, i: "17", c: "name" },
  { x: 6, y: 1, w: 1, h: 2, i: "18", c: "name" },
  { x: 7, y: 1, w: 1, h: 2, i: "19", c: "name" },
  { x: 8, y: 1, w: 1, h: 2, i: "20", c: "name" },
  { x: 9, y: 1, w: 1, h: 2, i: "21", c: "name" },
  { x: 10, y: 1, w: 1, h: 2, i: "22", c: "name" },
  { x: 11, y: 1, w: 1, h: 2, i: "23", c: "name" },
  { x: 0, y: 2, w: 1, h: 2, i: "24", c: "name" },
  { x: 1, y: 2, w: 1, h: 2, i: "25", c: "name" },
  { x: 2, y: 2, w: 1, h: 2, i: "26", c: "name" },
  { x: 3, y: 2, w: 1, h: 2, i: "27", c: "name" },
  { x: 4, y: 2, w: 1, h: 2, i: "28", c: "name" },
  { x: 5, y: 2, w: 1, h: 2, i: "29", c: "name" },
  { x: 6, y: 2, w: 1, h: 2, i: "30", c: "name" },
  { x: 7, y: 2, w: 1, h: 2, i: "31", c: "name" },
  { x: 8, y: 2, w: 1, h: 2, i: "32", c: "name" },
  { x: 9, y: 2, w: 1, h: 2, i: "33", c: "name" },
  { x: 10, y: 2, w: 1, h: 2, i: "34", c: "name" },
  { x: 11, y: 2, w: 1, h: 2, i: "35", c: "name" },
  { x: 0, y: 3, w: 1, h: 2, i: "36", c: "name" },
  { x: 1, y: 3, w: 1, h: 2, i: "37", c: "name" },
  { x: 2, y: 3, w: 1, h: 2, i: "38", c: "name" },
  { x: 3, y: 3, w: 1, h: 2, i: "39", c: "name" },
  { x: 4, y: 3, w: 1, h: 2, i: "40", c: "name" },
  { x: 5, y: 3, w: 1, h: 2, i: "41", c: "name" },
  { x: 6, y: 3, w: 1, h: 2, i: "42", c: "name" },
  { x: 7, y: 3, w: 1, h: 2, i: "43", c: "name" },
  { x: 8, y: 3, w: 1, h: 2, i: "44", c: "name" },
  { x: 9, y: 3, w: 1, h: 2, i: "45", c: "name" },
  { x: 10, y: 3, w: 1, h: 2, i: "46", c: "name" },
  { x: 11, y: 3, w: 1, h: 2, i: "47", c: "name" },
  { x: 0, y: 4, w: 1, h: 2, i: "48", c: "name" },
  { x: 1, y: 4, w: 1, h: 2, i: "49", c: "name" },
  { x: 2, y: 4, w: 1, h: 2, i: "50", c: "name" },
  { x: 3, y: 4, w: 1, h: 2, i: "51", c: "name" },
  { x: 4, y: 4, w: 1, h: 2, i: "52", c: "name" },
  { x: 5, y: 4, w: 1, h: 2, i: "53", c: "name" },
  { x: 6, y: 4, w: 1, h: 2, i: "54", c: "name" },
  { x: 7, y: 4, w: 1, h: 2, i: "55", c: "name" },
  { x: 8, y: 4, w: 1, h: 2, i: "56", c: "name" },
  { x: 9, y: 4, w: 1, h: 2, i: "57", c: "name" },
  { x: 10, y: 4, w: 1, h: 2, i: "58", c: "name" },
  { x: 11, y: 4, w: 1, h: 2, i: "59", c: "name" },
  { x: 0, y: 5, w: 1, h: 2, i: "60", c: "name" },
  { x: 1, y: 5, w: 1, h: 2, i: "61", c: "name" },
  { x: 2, y: 5, w: 1, h: 2, i: "62", c: "name" },
  { x: 3, y: 5, w: 1, h: 2, i: "63", c: "name" },
  { x: 4, y: 5, w: 1, h: 2, i: "64", c: "name" },
  { x: 5, y: 5, w: 1, h: 2, i: "65", c: "name" },
  { x: 6, y: 5, w: 1, h: 2, i: "66", c: "name" },
  { x: 7, y: 5, w: 1, h: 2, i: "67", c: "name" },
  { x: 8, y: 5, w: 1, h: 2, i: "68", c: "name" },
  { x: 9, y: 5, w: 1, h: 2, i: "69", c: "name" },
  { x: 10, y: 5, w: 1, h: 2, i: "70", c: "name" },
  { x: 11, y: 5, w: 1, h: 2, i: "71", c: "name" },
  { x: 0, y: 6, w: 1, h: 2, i: "72", c: "name" },
  { x: 1, y: 6, w: 1, h: 2, i: "73", c: "name" },
  { x: 2, y: 6, w: 1, h: 2, i: "74", c: "name" },
  { x: 3, y: 6, w: 1, h: 2, i: "75", c: "name" },
  { x: 4, y: 6, w: 1, h: 2, i: "76", c: "name" },
  { x: 5, y: 6, w: 1, h: 2, i: "77", c: "name" },
  { x: 6, y: 6, w: 1, h: 2, i: "78", c: "name" },
  { x: 7, y: 6, w: 1, h: 2, i: "79", c: "name" },
  { x: 8, y: 6, w: 1, h: 2, i: "80", c: "name" },
  { x: 9, y: 6, w: 1, h: 2, i: "81", c: "name" },
  { x: 10, y: 6, w: 1, h: 2, i: "82", c: "name" },
  { x: 11, y: 6, w: 1, h: 2, i: "83", c: "name" },
  { x: 0, y: 7, w: 1, h: 2, i: "84", c: "name" },
  { x: 1, y: 7, w: 1, h: 2, i: "85", c: "name" },
  { x: 2, y: 7, w: 1, h: 2, i: "86", c: "name" },
  { x: 3, y: 7, w: 1, h: 2, i: "87", c: "name" },
  { x: 4, y: 7, w: 1, h: 2, i: "88", c: "name" },
  { x: 5, y: 7, w: 1, h: 2, i: "89", c: "name" },
  { x: 6, y: 7, w: 1, h: 2, i: "90", c: "name" },
  { x: 7, y: 7, w: 1, h: 2, i: "91", c: "name" },
  { x: 8, y: 7, w: 1, h: 2, i: "92", c: "name" },
  { x: 9, y: 7, w: 1, h: 2, i: "93", c: "name" },
  { x: 10, y: 7, w: 1, h: 2, i: "94", c: "name" },
  { x: 11, y: 7, w: 1, h: 2, i: "95", c: "name" },
]
let Seats = useSeatsStore();
let layout = ref([])

async function checkExist(table:any){
  const result = await table.get(1)
  if(result){
    return true;
  }
  return false
}

async function initData(){
  const grid = Seats.$state.godb.table('layout')
  const exist = await checkExist(grid)
  if(!exist){
    console.log('data not existed')
    await grid.addMany(data)
    
  }
  layout.value = await grid.getAll();
 

}



onMounted(()=>{
   try{
    initData();
    window.document.addEventListener('keydown',handleSave,false);
   }catch(err){
    console.log(err)
   }

}) 

const handleItem = (i:string)=>{
  const el = document.getElementById(i);
  const layoutTarget = layout.value[Number(i)]
  el!.innerHTML = `<input style='border: 1px solid #ccc; border-radius: 3px;width: 83%;height: 78%;font-size: 1rem;' :id='newName${i}' :value='${layoutTarget.c}' placeholder='姓名'  />`
  el?.addEventListener('keydown',(e)=>{
    const inputValue = el.childNodes[0] as HTMLInputElement
    if(e.code == "Enter"){
      if(!inputValue.value){
        inputValue.value = '...'
      }
      el.innerHTML = inputValue.value
      layoutTarget.c = inputValue.value
      if(inputValue.value == '...'){
        el.className = 'noContent'
      }
      
      
    }
  })
  
}

function layoutUpdatedEvent(newLayout:any){
      const updatedData = JSON.parse(JSON.stringify(newLayout))
      const dbTable = Seats.$state.godb.table('layout')
      for(let i = 0; i<updatedData.length;i++){
        dbTable.put(updatedData[i])
      }
}

</script>

<template>
<div class="seats">
        <grid-layout
            :layout.sync="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
            @layout-updated="layoutUpdatedEvent"
    >

        <grid-item v-for="item in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :key="item.i">
            <div class="content" :id="item.i" @dblclick="handleItem(item.i)">{{item.c}}</div>
        </grid-item>
    </grid-layout>
</div>
</template>

<style scoped>
.seats{
  position: relative;
  top:3vh;
  color: #fff;
  border:1px solid #fff;
  border-radius: 1px;
  width: 80vw;
  padding-bottom: 4vh;
  height:77vh;
}
.content{
  background:#fff;
  height:4vw;
  color:black;
  cursor: pointer;
  line-height: 4vw;
  font-size:1.2vw;
  overflow: hidden;
}
.noContent{
  background:rgb(40, 52, 113);
  height:4vw;
  color:rgb(40, 52, 113);
  cursor: pointer;
  line-height: 4vw;
  font-size:1.2vw;
  border:0px;
  overflow: hidden;
  
}

.stu_names{
    outline-style: none ;
    border: 1px solid #ccc; 
    border-radius: 3px;
    padding: 14px 14px;
    width: 620px;
    font-size: 24px;

}

</style>
