<script setup lang="ts">
import {ref,reactive} from 'vue';
interface InewItem{
  x:number,
  y:number,
  w:number,
  h:number,
  i:number,
}
let index= ref(1);

let layout = reactive([
                { x: 0, y: 0, w: 1, h: 2, i: 0 },
            ])
let params = {
  colNum:12,
  rowHeight:20,
  maxRows:7,
  margin:[20,20],
  colWidth:30,
  verticalCompact:false
}

//methods
const handleItem = ()=>{
  console.log('double click')
}

const newItem = ref({
   x: layout.value.length + 1 ,
   y: 0,
   w: 1,
   h: 2,
   i: index.value,
})

const addItem = ()=> {
  layout.value.push(newItem.value)
  index.value++ 
  console.log(layout.value)
  console.log(index)
}


</script>

<template>
<div class="seats">
    <button @click="addItem">增加座位</button>
    <grid-layout :layout.sync="layout"
                     :col-num=params.colNum
                     :row-height=params.rowHeight
                     :col-width=params.colWidth
                     :max-rows=params.maxRows
                     :margin=params.margin
                     :is-draggable=true
                     :is-resizable=false
                     :vertical-compact=true
                     :use-css-transforms=true
                     :auto-size=true
                     responsive=true
                     vertical-compact=params.verticalCompact
        >
            <grid-item v-for="item in layout"
                       :static="false"
                       :x="item.x"
                       :y="item.y"
                       :w="item.w"
                       :h="item.h"
                       :i="item.i"
                       :key="item.i"
            >
                <div class="content" @dblclick="handleItem">{{item.i}}</div>
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
  height:60vh;
}
.content{
  background:#fff;
  height:100%;
  color:black;
  cursor: pointer;
  
  
}
</style>
