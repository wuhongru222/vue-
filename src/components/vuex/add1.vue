<template>
  <div>2222222
     <button @click="jiahao">+{{$store.getters.showname}}</button>
  </div>
 
</template>

<script>
export default {
    name:'Add1',
  data(){
    return{}
  },
  methods:{
    jiahao(){
        
        this.$store.commit('add',2)
    }
  }
}
</script>

<style>

</style>