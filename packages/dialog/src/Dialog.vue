<template>
  <transition name="slide">

23412
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'xzt-dialog',
  props: {

  },
  data() {
    return {
      openFullscreen: false,
    }
  },
  methods: {
    popId() {
      this.$emit('click', [this.id, this.title])
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
