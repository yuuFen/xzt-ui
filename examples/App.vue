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

    <button @click="click">open</button>

    <xzt-slide :open="open">
      <mu-button icon @click="click">
        <mu-icon value="close"></mu-icon>
      </mu-button>
      <div style="padding: 0 16px;">
        <h2 class="text-dark mb-3">账号密码登录</h2>
        <div class="mb-4 fs-lg text-dark-1">使用已注册手机号或邮箱登陆</div>
        <mu-text-field label="手机号码" class="mb-3 fs-xxl" color="indigo500" style="width:100%"></mu-text-field>
        <mu-text-field label="密码" class="fs-xxl" color="indigo500" style="width:100%" type="text"></mu-text-field>
        <mu-button color="indigo500" large full-width data-mu-loading-size="24" data-mu-loading-color="indigo500"
          >立即登录</mu-button
        >

        <div class="fs-sm text-primary pt-4 ml-1 d-flex jc-between ai-center">
          <div>
            手机动态密码登录
          </div>
          <mu-checkbox color="indigo300" :ripple="false" label-left :label="'我已同意《新职通用户协议》'"></mu-checkbox>
        </div>
      </div>
      <div style="position:absolute;bottom:0">
        <h1></h1>
      </div>
    </xzt-slide>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      open: false,
    }
  },
  methods: {
    click() {
      this.open = !this.open
    },
  },
}
</script>

