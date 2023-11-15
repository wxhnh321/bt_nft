<template>
  <div>
    <header-layout></header-layout>
    <router-view/>
    <footer-layout></footer-layout>
  </div>
</template>

<script>
import HeaderLayout from './HeaderLayout.vue'
import FooterLayout from './FooterLayout.vue'

export default {
  name: 'BasicLayout',
  components: {
    HeaderLayout,
    FooterLayout
  },
  data () {
    return {

    }
  },
  computed: {
    
  },
  created () {
    
  },
  mounted () {

  },
  methods: {
  
  }
}
</script>

<style lang="scss">
</style>
