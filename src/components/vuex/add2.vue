<template>
  <div>
    <button @click="addss(4)">-1 {{showname}}</button>
    <button @click="addi2">对象合并</button>
  </div>
</template>

<script>

import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
    name:'Add2',
    data(){
        return{
         duixiang1:{xiao:'1',ming:'2'},
         duixiang2:{x:'3',hong:'4'}
        }
    },
    computed:{
        ...mapState(['count']),
        ...mapGetters(['showname']),
    },
    methods:{
        
        ...mapMutations(['adds']),
        ...mapActions(['addss']),
        // jian(){
        //     this.$store.dispatch('addss',4)
        //     // this.addss(2)
        // //   this.adds(2)
        // }
        addi2(){
            //对象拷贝到四种方法
        //    const add33 = {...this.duixiang1,...this.duixiang2}
        // const add33 = Object.assign({},this.duixiang1,this.duixiang2)
        // const add33 = $.extend(this.duixiang1,this.duixiang2)
        const add33 = $.extend(true,this.duixiang1,this.duixiang2)
            console.log(add33)
        }
    }
}
</script>

<style>

</style>