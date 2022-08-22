import { DBCoreRangeType } from "dexie";
import { defineStore, acceptHMRUpdate } from "pinia";
import GoDB from "godb";
// import {schema} from "./schema";


export const useSeatsStore = defineStore({
    id: 'seats',
    state: () => ({
        godb: new GoDB('seatsDB'),
        layout:[]
    }),
    getters:{
        // data:(state)=>{
        //     if(state.relyable){
        //         let data = window.localStorage.getItem("layout")
        //         if(data){
        //             data = JSON.parse(data)
        //             return data;
        //         }
        //         return []    
        //     }
        //     else{
        //         return state.layout
        //     }
        // }

    },
    actions:{

    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSeatsStore, import.meta.hot))
}