<template>
  <div id="app">
    <!-- <xzt-card
      cover="https://nest-vue-uni-demo.oss-cn-shanghai.aliyuncs.com/1%20%2827%29.JPG"
      title="Title"
      id="1"
      count="1074"
      author="MM老师"
      price="0.00"
      @click="popId"
      imgHeight="100"
      icon=""
    ></xzt-card> -->

    <xzt-dialog>

      4444
    </xzt-dialog>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      a: true,
    }
  },
  methods: {
    popId(e) {
      console.log(e)
      this.a = !this.a
      setTimeout(() => {
        this.a = !this.a
      }, 10000)
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
