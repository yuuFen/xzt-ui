<template>
  <transition name="slide">
    <div v-if="open" class="xzt-dialog">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'xzt-slide',
  props: {
    open: { type: Boolean, required: true },
  },
  data() {
    return {
      openFullscreen: false,
    }
  },
  methods: {},
}
</script>

<style lang="scss">
.xzt-dialog {
  box-sizing: content-box;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 5px 15px 0 rgba(0, 0, 0, 0.19);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #fff;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
