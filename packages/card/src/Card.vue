<template>
  <!-- 
  * picture String
  * name String 标题
    imgHeight string 图片高度（px）
    id Number 对应的id
    count String 购买/观看人数
    author String 
    price String
    fill 宽度是否占满
    @click pop ID
  -->
  <div class="itemCard shadow-card bg-white text-dark-1 mb-3" :class="{ fill: fill }" @click="popId">
    <div :style="`height:${imgHeight}px;overflow:hidden`">
      <img :src="picture" width="100%" />
    </div>
    <div class="d-flex jc-between fs-md mt-2 mx-2">
      <span class="text-ellipsis">{{ name }}</span>
      <span class="text-ellipsis text-right mr-2" style="width:4em">{{ author }}</span>
    </div>
    <div class="d-flex jc-between my-1 py-1 ml-2 mr-2">
      <strong v-if="price" class="text-price fs-lg">￥{{ price }}</strong>
      <div v-if="count" class="fs-sm mr-2">
        <i :class="`iconfont icon-${icon} mr-1`"></i>
        <span class="text-grey-1">{{ count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yu-card',
  props: {
    picture: { type: String, required: true },
    name: { type: String, required: true },
    id: String,
    count: String,
    author: String,
    icon: String,
    price: String,
    fill: Boolean,
    imgHeight: String,
  },
  data() {
    return {
      openFullscreen: false,
    }
  },
  methods: {
    popId() {
      this.$emit('click', [this.id, this.name])
    },
  },
}
</script>

<style lang="scss">
.itemCard {
  width: 45%;
  overflow: hidden;
  border-radius: 5px;
  &.fill {
    width: 95%;
  }
}
</style>
