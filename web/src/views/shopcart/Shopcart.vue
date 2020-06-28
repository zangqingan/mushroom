<template>
  <div id="shopcart">
   购物车页面

  </div>
</template>

<script>





export default {
  name: 'Shopcart',
  data() { 
    return {

    }
  },
  components:{

  },
  computed:{
  }
 }
</script>

<style  scoped>
  #shopcart {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
  }
</style>